import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = ({ filterTypeItem, items, value = '', search = false }) => {
	const [type, setType] = React.useState(value);
	const [scrollbar, setScrollbar] = React.useState(true);

	const handleChange = (event) => {
		setType(event.target.value);
		filterTypeItem(event.target.value);
	};
	React.useEffect(() => {
		setType(value);
	}, [value])

	const onSelectOpen = () => {
		if (document.body.clientHeight > window.innerHeight) {
			setScrollbar(false);
		}
	}
	const onSelectClose = () => {
		if (document.body.clientHeight > window.innerHeight) {
			setScrollbar(true);
		}
	}
	return (
		<>
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth size="small">
				<InputLabel id="demo-simple-select-label">Type</InputLabel>
				<Select
					onClose={onSelectClose}
					onOpen={onSelectOpen}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={type}
					label="Type"
					onChange={handleChange}
				>
					{search && <MenuItem value='all'>Tout</MenuItem>}
					{items.map(item => {
						return (
							<MenuItem value={item} key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</MenuItem>
						)
					})}
				</Select>
			</FormControl>
		</Box>
		<style jsx global>{`
			.header-container {
				padding-right: ${scrollbar ? '' : '15px'}
			}
		`}</style>
		</>
	);
}

export default CustomSelect;