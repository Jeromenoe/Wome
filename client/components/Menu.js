import React from 'react'
import Image from 'next/image'

function Menu({menuItem}) {
    return (
		<>
			<div className="item">
				{
					menuItem.map((item) =>{
						return <div className="item-con" key={item._id} >
							<div className="item-container" >
								<div style={{ position: 'relative', width: '100%', height: '200px' }}>
									<Image className='activity-img' src={item.img} alt="" layout="fill"/>
								</div>
								<div className='first-line'>
									<p className='city'>{item.city}</p>
									<p className='price'>{item.price}€</p>
								</div>
								<p className='description'>{item.description}</p>
							</div>
						</div>
					})
				}
			</div>
			<style jsx>{`
				.city {
					font-weight: bold;
					color : #555;
				}
				.price {
					margin-right: 5px;
				}
				.description {
					font-size: 0.92em;
					color: #777777
				}
				.first-line {
					margin: 11px 0px 7px 0;
					display: flex;
					justify-content: space-between;
				}
			`}</style>
		</>
    )
}

export default Menu;
