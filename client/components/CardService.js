
import { useState } from 'react'
import CustomSelect from './CustomSelect'

const CardService = ({ onAdd }) => {
	const [city, setCity] = useState('');
	const [type, setType] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');


	const onSubmit = (e) => {
		e.preventDefault()
		console.log(city, type, description);
		onAdd({ city, type, description, price: parseInt(price) })
		// setCity('')
		// setType('')
		// setDescription('')
		// setPrice('')
	}

	const handleType = (type) => {
		setType(type);
	}

	return (
		<>

			<form onSubmit={onSubmit}>
				<div className='form-control first-line'>
					<input type="text" id="city" placeholder="Ville de l'activité" title="Ville" value={city}
					onChange={(e) => setCity(e.target.value)} style={{marginRight: '20px'}}></input>
					<CustomSelect filterTypeItem={handleType} items={['yoga', 'velo']} value={type}/>
				</div>
				<div className='form-control'>
					<textarea type="text" id="description" placeholder="Description de l'activité" title="Description"
					onChange={(e) => setDescription(e.target.value)}
					value={description}></textarea>
				</div>
				<input type="text" id="price" placeholder="Prix" title="Prix" value={price} onChange={(e) => setPrice(e.target.value)}></input>
				<input type='submit' value='Ajouter' className='btn btn-block' />
			</form>
			<style jsx>{`
				.form-control {
					margin: 20px 0;
				}

				.form-control label {
					display: block;
				}

				.form-control-check {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.form-control-check label {
					flex: 1;
				}

				.form-control-check input {
					flex: 2;
					height: 20px;
				}
				#city {
					background-position: 10px 12px;
					background-repeat: no-repeat;
					width: 100%;
					font-size: 16px;
					padding: 12px 20px 12px 5px;
					border: 1px solid #ddd;
					height: 38px;
					margin: 0;
				}

				#price {
					background-position: 10px 12px;
					background-repeat: no-repeat;
					width: 30%;
					font-size: 16px;
					padding: 12px 20px 12px 5px;
					border: 1px solid #ddd;
					height: 38px;
					margin: 0;
				}
				
				#description {
					background-position: 10px 12px;
					background-repeat: no-repeat;
					width: 100%;
					font-size: 16px;
					padding: 5px;
					border: 1px solid #ddd;
					height: 80px;
					margin: 0;
					resize: none;
					font-family: 'Varela Round', sans-serif;
				}

				.first-line {
					display: flex;
					align-items: center;
				}
				.btn {
					display: inline-block;
					background: #000;
					color: #fff;
					border: none;
					padding: 10px 20px;
					margin-top: 25px;
					border-radius: 5px;
					cursor: pointer;
					text-decoration: none;
					font-size: 15px;
					font-family: inherit;
				}

				.btn:focus {
					outline: none;
				}

				.btn:active {
					transform: scale(0.98);
				}

				.btn-block {
					display: block;
					width: 100%;
				}
			`}</style>
		</>
	)
}

export default CardService