import React from "react";
import Header from "../components/Header";
import axios from "axios";
import Activities from "../components/Activities";
import Imgs from "../data/imgs";
import { getCookie } from 'cookies-next';
import CardService from "../components/CardService";

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
				<div className="services-container">
					<div className="card-service-container">
						<h1>Ma prestation</h1>
						<CardService />
					</div>
					<Activities activityItems={activities} />
				</div>
			</div>
			<style jsx>{`
				.main {
					margin-top: 110px;
				}
				.services-container {
					width: 80%;
					margin: auto;
				}
				.card-service-container {
					max-width: 400px;
					margin: 30px auto;
					overflow: auto;
					min-height: 300px;
					border: 1px solid #555;
					padding: 30px;
					border-radius: 5px;
				}
			`}</style>
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
