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
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);
	activities = activities.map(activity => {
		activity.img = Imgs[activity.type];
		if (!activityTypes.includes(activity.type)) {
			activityTypes.push(activity.type);
		}
		if (activity.price < minPrice) {
			setMinPrice(activity.price);
		}
		if (activity.price > maxPrice) {
			setMaxPrice(activity.price);
		}
		return activity;
	})

	const [activityItems, setActivityItems] = useState(activities);
	const [filterType, setFilterType] = useState('all');
	const [filterCity, setFilterCity] = useState('');
	const [filterPrice, setFilterPrice] = useState([minPrice, maxPrice]);

	const filterTypeItem = (type) => {
		setFilterType(type);
	};

	const filterCityItem = (text) => {
		setFilterCity(text);
	}

	const filterPriceItem = (prices) => {
		setFilterPrice(prices);
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
		});
		if (filterPrice[0] !== filterPrice[1]) {
			newActivityItems = newActivityItems.filter((activity) => {
				return activity.price >= filterPrice[0] && activity.price <= filterPrice[1];
			});
		}
		setActivityItems(newActivityItems);
	}, [filterType, filterCity, filterPrice]);

	return (
		<>
			<Header fixed={true} />
			<div className='main' >
				<div className="App">

					<div className="title">
						<h1>
							Activités
							<span style={{ color: '#037FFF' }}> Nature</span>
						</h1>
					</div>

					<FilterActivities
						filterTypeItem={filterTypeItem}
						filterCityItem={filterCityItem}
						filterPriceItem={filterPriceItem}
						minPrice={minPrice}
						maxPrice={maxPrice}
						activityTypes={activityTypes}
					/>
					<Activities activityItems={activityItems} />

				</div>
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
