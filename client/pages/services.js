import React from "react";
import Header from "../components/Header";
import axios from "axios";
import Activities from "../components/Activities";
import Imgs from "../data/imgs";
import { getCookie, checkCookies } from 'cookies-next';

const cookieToJson = (cookie) => {
	var output = {};
	cookie.split(/\s*;\s*/).forEach(function (pair) {
		pair = pair.split(/\s*=\s*/);
		output[pair[0]] = pair.splice(1).join('=');
	});
	var json = JSON.stringify(output, null, 4);
	return json;
}

const Services = ({ activities, error }) => {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	activities = activities.map(activity => {
		activity.img = Imgs[activity.type];
		return activity;
	});
	return (
		<>
			<Header fixed={true} />
			<div className='main' >
				<div className="App">
					<Activities activityItems={activities} />
				</div>
			</div>
		</>
	);
};

Services.getInitialProps = async ({ req }) => {
	try {
		let token = '';
		if (req) {
			token = JSON.parse(cookieToJson(req.headers.cookie)).jwt;
		} else {
			token = getCookie('jwt');
		}
		const res = await axios.get('http://localhost:3001/activities/getByUser',
			{
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
		const activities = res.data;
		return { activities };
	} catch (error) {
		return { error };
	}
};

export default Services;
