import React from "react";
import Image from 'next/image'
import { useState } from 'react'

const Service = ({ activity, handleDeleteService }) => {
	const [itemId, setItemId] = useState('');
	const [top, setTop] = useState(0);
	const deleteItem = (e) => {
		handleDeleteService(e.target.value);
	}
	return (
		<>
			<div className="item-con" onMouseOver={() => setItemId(activity._id)}>
				<div className="item-container" >
					<div style={{ position: 'relative', width: '100%', height: '200px' }}>
						<Image className='activity-img' src={activity.img} alt="" layout="fill" />
					</div>
					<div className='first-line'>
						<p className='city'>{activity.city}</p>
						<p className='price'>{activity.price}€</p>
					</div>
					<p className='description'>{activity.description}</p>
				</div>
				{activity._id == itemId && 
				<div className='update-container' ></div>}
				{activity._id == itemId && 
				<div className='update-btn' onMouseLeave={() => setItemId('')}>
					<button className="delete btn" onClick={deleteItem} value={activity._id}>Supprimer</button>
				</div>}
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
				.update-container {
					position: absolute;
					width: 100%;
					height: 100%;
					background-color: #fff;
					opacity: 0.7;
					top: 0;
					left: 0;
					z-index: 10;
				}
				.update-btn {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					cursor: pointer;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 11;
				}
				.btn {
					padding: 10px;
				}
				.update {
					background-color: white;
					color: #0060b5;
					opacity: 1;
					border: solid 1px #0060b5;
				}
				.delete {
					background-color: white;
					color:  #c70505 ;
					opacity: 1;
					border: solid 1px #c70505;

				}
				.update-popup {
					transition:visibility 0.2s linear,opacity 0.2s linear;
					background-color: rgba(0, 0, 0, 0.7);
					position: absolute;
					left: 0; 
					top: ${top}px;
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 110;
					overflow: hidden;
				}
			`}</style>
		</>
	);
};

export default Service;
