import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Activities from "../components/Activities";
import Imgs from "../data/imgs";
import { getCookie } from 'cookies-next';
import CardService from "../components/CardService";
import Notification from '../components/Notification';

const cookieToJson = (cookie) => {
	var output = {};
	cookie.split(/\s*;\s*/).forEach(function (pair) {
		pair = pair.split(/\s*=\s*/);
		output[pair[0]] = pair.splice(1).join('=');
	});
	var json = JSON.stringify(output, null, 4);
	return json;
}

const Services = ({ activities, token, error }) => {
	const [services, setServices] = useState(activities);
	const [notif, setNotif] = React.useState(false);
	const [message, setMessage] = React.useState('');
	const [severity, setSeverity] = React.useState('');
	const [resetParams, setResetParams] = React.useState(true);

	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	activities = activities.map(activity => {
		activity.img = Imgs[activity.type];
		return activity;
	});
	

	const handleAddService = async (service) => {
		try {
			await axios.post(process.env.API_URL + 'activities', {...service}, {
				headers: {
					'Content-type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
			})
			const resActivities = await axios.get(process.env.API_URL + 'activities/getByUser', {
					headers: {
						'Authorization': `Bearer ${token}`
					}
			});
			const newActivities = resActivities.data.map(activity => {
				activity.img = Imgs[activity.type];
				return activity;
			});
			setServices(newActivities);
			setMessage('Prestation ajoutée !');
			setSeverity('success');
			setResetParams(false);
			setResetParams(true);
			setNotif(false);
			setNotif(true);
		} catch (error) {
			if (typeof error.response.data.message === 'string') {
				setMessage(error.response.data.message);
			} else {
				setMessage(error.response.data.message[0]);
			}
			setSeverity('error');
			setNotif(false);
			setNotif(true);
			return;
		}
	}

	const handleDeleteService = async (activtyId) => {
		try {
			await axios.delete(process.env.API_URL + `activities/${activtyId}`, {
				headers: {
					'Content-type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
			})
			const resActivities = await axios.get( process.env.API_URL + 'activities/getByUser', {
					headers: {
						'Authorization': `Bearer ${token}`
					}
			});
			const newActivities = resActivities.data.map(activity => {
				activity.img = Imgs[activity.type];
				return activity;
			});
			setServices(newActivities);
			setMessage('Prestation supprimée !');
			setSeverity('success');
			setNotif(false);
			setNotif(true);
		} catch (error) {
			if (typeof error.response.data.message === 'string') {
				setMessage(error.response.data.message);
			} else {
				setMessage(error.response.data.message[0]);
			}
			setSeverity('error');
			setNotif(false);
			setNotif(true);
			return;
		}
	}

	return (
		<>
			<Header fixed={true}/>
			<div className='main' >
				<div className="services-container">
					<div className="card-service-container">
						<h1>Prestation</h1>
						{resetParams && <CardService onAdd={handleAddService} />}
					</div>
					<Activities activityItems={services} isChangeable='true' handleDeleteService={handleDeleteService}/>
				</div>
			</div>
			{notif && <Notification message={message} severity={severity} />}
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
				h1 {
					font-size: 2rem;
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
		const res = await axios.get(process.env.API_URL + 'activities/getByUser',
			{
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
		const activities = res.data;
		return { activities, token };
	} catch (error) {
		return { error };
	}
};

export default Services;
