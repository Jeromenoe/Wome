import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const minDistance = 10;

export default function CustomSlider({ filterPriceItem, minPrice, maxPrice }) {
	const [value, setValue] = React.useState([minPrice, maxPrice]);

	const handleChange = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}
		if (activeThumb === 0) {
			setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
		} else {
			setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
		}
	};
	
	const handleChangeCommitted = () => {
		filterPriceItem([value[0], value[1]]);
	}

	return (
		<>
			<Box sx={{ width: 120 }}>
				<Slider
					getAriaLabel={() => 'Minimum distance'}
					value={value}
					onChange={handleChange}
					onChangeCommitted={handleChangeCommitted}
					valueLabelDisplay="auto"
					disableSwap
					min={minPrice}
					max={maxPrice}
				/>
				<div className='prices'>
					<span>{value[0]}€</span>
					<span>{value[1]}€</span>
				</div>
			</Box>
			<style jsx>{`
				.prices {
					display: flex;
					justify-content: space-between;
					color: #888;
					font-size: 14px;
				}
			`}</style>
		</>
	);
}