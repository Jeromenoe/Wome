
import { useState } from 'react'
import CustomSelect from './CustomSelect'

const CardService = ({ onAdd }) => {
	const [text, setText] = useState('')
	const [day, setDay] = useState('')
	const [reminder, setReminder] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault()
		console.log('btn');
		
			return

		onAdd({ text, day, reminder })

		setText('')
		setDay('')
		setReminder(false)
	}

	const handleType = (type) => {
		console.log(type);
	}

	return (
		<>

			<form onSubmit={onSubmit}>
				<div className='form-control first-line'>
					<input type="text" id="city" placeholder="Ville de l'activité" title="Ville" style={{marginRight: '20px'}}></input>
					<CustomSelect filterTypeItem={handleType} items={['yoga', 'velo']}/>
				</div>
				<div className='form-control'>
					<textarea type="text" id="description" placeholder="Description de l'activité" title="Description"></textarea>
				</div>
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