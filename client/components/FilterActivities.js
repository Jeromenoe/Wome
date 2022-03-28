import React from "react";
import CustomSelect from "./CustomSelect";
import SearchIcon from '@mui/icons-material/Search';
import CustomSlider from "./CustomSlider";


const FilterActivities = ({ filterTypeItem, filterCityItem, filterPriceItem, activityTypes, minPrice, maxPrice, setScrollbar }) => {
	const handleCityFilter = (event) => {
		filterCityItem(event.target.value);
	}
	return (
		<>
			<div className="filters-container">
				<div style={{width: '300px', position: 'relative'}}>
					<SearchIcon style={{ position: 'absolute', top: '10px', left: '8px', color: '#555', fontSize: '1.1em'}}/>
					<input type="text" id="myInput" onKeyUp={handleCityFilter} placeholder="Recherche par ville" title="Type in a name"></input>
				</div>
				<div style={{width: '150px', marginLeft: '30px'}}>
					<CustomSelect 
						items={activityTypes}
						filterTypeItem={filterTypeItem}
						search={ true }
					/>
				</div>
				<div style={{marginLeft: '35px'}}>
					<span style={{color: '#666'}}>Tarif</span>
					<CustomSlider 
						filterPriceItem={filterPriceItem}
						minPrice={minPrice}
						maxPrice={maxPrice}
					/>
				</div>
			</div>
			<style jsx>{`
				.filters-container {
					margin-bottom: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				#myInput {
					background-position: 10px 12px;
					background-repeat: no-repeat;
					width: 100%;
					font-size: 16px;
					padding: 12px 20px 12px 32px;
					border: 1px solid #ddd;
					height: 38px;
				}
			`}</style>
		</>
	)
};

export default FilterActivities;
