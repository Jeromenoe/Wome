import { useState } from 'react';
import Imgs from '../data/imgs';
import Activities from '../components/Activities';
import Button from '../components/Button';
import Header from '../components/Header';
import axios from 'axios';
import FilterActivities from '../components/FilterActivities';



// const allCategories = ['All', ...new Set(items.map(item => item.category))];

// console.log(allCategories);

function App({ activities, error}) {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	const activityTypes = [];
	activities = activities.map(activity => {
		activity.img = Imgs[activity.type];
		if (!activityTypes.includes(activity.type)) {
			activityTypes.push(activity.type);
		}
		return activity;
	})
	
	const [activityItems, setActivityItems] = useState(activities);

	const filterTypeItem = (type) => {
		if (type === 'all') {
			setActivityItems(activities)
			return ;
		}
		const newActivityItems = activities.filter((activity) => {
			return activity.type === type;
		});
		setActivityItems(newActivityItems);
	  };


	return (
		<>
			<Header />
			<div className="App">

				<div className="title">
					<h1>
						Activités
						<span> Nature</span>
					</h1>
				</div>
				
				<FilterActivities 
					filterTypeItem={filterTypeItem}
					activityTypes={activityTypes}
				/>
				<Activities activityItems={activityItems} />

			</div>
		</>
	);
}

App.getInitialProps = async ctx => {
	try {
		const res = await axios.get('http://localhost:3001/activities');
		const activities = res.data;
		return { activities };
	} catch (error) {
		return { error };
	}
};

export default App;
