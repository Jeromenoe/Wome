import { useState } from 'react';
import items from '../data/allData';
import Menu from '../components/Menu';
import Button from '../components/Button';
import Header from '../components/Header';


const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

function App() {
	const [menuItem, setMenuItem] = useState(items);
	const [buttons, setButtons] = useState(allCategories);

	//Filter Function
	const filter = (button) => {

		if (button === 'All') {
			setMenuItem(items);
			return;
		}

		const filteredData = items.filter(item => item.category === button);
		setMenuItem(filteredData)
	}


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


				<Button button={buttons} filter={filter} />
				<Menu menuItem={menuItem} />

			</div>
		</>
	);
}

export default App;
