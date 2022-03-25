import { useState } from 'react';
import Imgs from '../data/imgs';
import Menu from '../components/Menu';
import Button from '../components/Button';
import Header from '../components/Header';
import axios from 'axios';



// const allCategories = ['All', ...new Set(items.map(item => item.category))];

// console.log(allCategories);

function App({ activities, error}) {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	activities = activities.map(activity => {
		activity.img = Imgs[activity.type];
		return activity;
	})
	
	const [menuItem, setMenuItem] = useState(activities);
	// const [buttons, setButtons] = useState(allCategories);

	//Filter Function
	// const filter = (button) => {

	// 	if (button === 'All') {
	// 		setMenuItem(activities);
	// 		return;
	// 	}

	// 	const filteredData = activities.filter(item => item.category === button);
	// 	setMenuItem(filteredData)
	// }


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


				{/* <Button button={buttons} filter={filter} /> */}
				<Menu menuItem={menuItem} />

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
