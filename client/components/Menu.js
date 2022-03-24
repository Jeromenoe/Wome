import React from 'react'
import Image from 'next/image'

function Menu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id} >
                        <div className="item-container" >
							<div style={{ position: 'relative', width: '100%', height: '200px' }}>
                            	<Image className='activity-img' src={item.image} alt="" layout="fill"/>
							</div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;
