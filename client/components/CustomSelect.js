import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = ({ filterTypeItem, items }) => {
	const [type, setType] = React.useState('');

	const handleChange = (event) => {
		setType(event.target.value);
		filterTypeItem(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Type</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={type}
					label="Type"
					onChange={handleChange}
				>
					<MenuItem value="all">Tout</MenuItem>
					{items.map(item => {
						return (
							<MenuItem value={item} key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</MenuItem>
						)
					})}
				</Select>
			</FormControl>
		</Box>
	);
}

export default CustomSelect;