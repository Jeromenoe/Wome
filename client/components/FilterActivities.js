import React from "react";
import CustomSelect from "./CustomSelect";


const FilterActivities = ({ filterTypeItem, activityTypes }) => {
	const handleOnChange = (e) => {
		filterTypeItem(e.target.value);
	}
	return (
		<>
			<div className="filters-container">
				<div style={{width: '150px'}}>
					<CustomSelect 
						items={activityTypes}
						filterTypeItem={filterTypeItem}
					/>
				</div>
			</div>
			<style jsx>{`
				.filters-container {
					margin-bottom: 20px
				}
			`}</style>
		</>
	)
};

export default FilterActivities;
