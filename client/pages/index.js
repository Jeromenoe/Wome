import { useEffect, useState } from 'react';
import Imgs from '../data/imgs';
import Activities from '../components/Activities';
import Header from '../components/Header';
import axios from 'axios';
import FilterActivities from '../components/FilterActivities';




function App({ activities, error }) {
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
	const [filterType, setFilterType] = useState('all');
	const [filterCity, setFilterCity] = useState('');
	// const [filterType, setFilterType] = useState('all');

	const filterTypeItem = (type) => {
		setFilterType(type);
	};



	const filterCityItem = (text) => {
		setFilterCity(text);
	}

	useEffect(() => {
		setActivityItems(activities);
		let newActivityItems = activities;
		if (filterType !== 'all') {
			newActivityItems = newActivityItems.filter((activity) => {
				return activity.type === filterType;
			});
		}
		newActivityItems = newActivityItems.filter((activity) => {
			return activity.city.toUpperCase().indexOf(filterCity.toUpperCase()) > -1;
		})
		setActivityItems(newActivityItems);
	}, [filterType, filterCity]);

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
					filterCityItem={filterCityItem}
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
