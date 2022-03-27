import React from 'react'
import Activity from './Activity';

import Service from './Service';

function Activities({activityItems, isChangeable = false, handleDeleteService = null}) {
    return (
		<>
			<div className="item" >
				{
					activityItems.map((activity) =>{
						if (isChangeable) {
							return <Service activity={activity} handleDeleteService={handleDeleteService} key={activity._id}/>
						} else {
							return <Activity activity={activity} key={activity._id}/>
						}
					})
				}
			</div>	
		</>
    )
}

export default Activities;
