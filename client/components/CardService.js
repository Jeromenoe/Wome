
import { useState } from 'react'
import CustomSelect from './CustomSelect'

const CardService = ({ onAdd }) => {
	const [text, setText] = useState('')
	const [day, setDay] = useState('')
	const [reminder, setReminder] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault()

		if (!text) {
			alert('Please add a task')
			return
		}

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

			<form className='add-form' onSubmit={onSubmit}>
				<div className='form-control'>
					<label>Ville</label>
					<input
						type='text'
						placeholder='Add Task'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className='form-control'>
					{/* <CustomSelect filterTypeItem={handleType} items={['yoga', 'velo']}/> */}
				</div>
				<input type='submit' value='Save Task' className='btn btn-block' />
			</form>
			<style jsx>{`
				.add-form {
					margin-bottom: 40px;
				}

				.form-control {
					margin: 20px 0;
				}

				.form-control label {
					display: block;
				}

				.form-control input {
					width: 100%;
					height: 40px;
					margin: 5px;
					padding: 3px 7px;
					font-size: 17px;
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
			`}</style>
		</>
	)
}

export default CardService