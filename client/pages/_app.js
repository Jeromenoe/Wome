import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<Component {...pageProps}/>
	);
}

//makeStore function that returns a new store for every request

export default MyApp;