import axios from 'axios';

const Home = (props) => {
	if (props.error) {
		return <div>An error occured: {props.error.message}</div>;
	}
	return (
		<div>
			<h1>Hello world !</h1>
		</div>
	)
}

// Home.getInitialProps = async ctx => {
// 	try {
// 		const res = await axios.get('http://localhost:3001/users/activities');
// 		const users = res.data;
// 		return { users };
// 	} catch (error) {
// 		return { error };
// 	}
// };


export default Home;