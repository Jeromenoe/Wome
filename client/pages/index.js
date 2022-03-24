import axios from 'axios';

const Home = ({ activities, error}) => {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}
	return (
		<div>
			{activities.map(activity => <li key={activity._id}>{activity.description}</li> )}
		</div>
	)
}

Home.getInitialProps = async ctx => {
	try {
		const res = await axios.get('http://localhost:3001/activities');
		const activities = res.data;
		return { activities };
	} catch (error) {
		return { error };
	}
};


export default Home;