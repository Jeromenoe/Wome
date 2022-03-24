import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileBtn = () => {
	const showMenu = () => {
		console.log('object');
	}
	return (
		<>
			<div className='profile-icon' onClick={showMenu}>
				<div className='bar-container'>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>
				<AccountCircleIcon style={{ color: '#888', fontSize: '34px' }} />
			</div>
			<style jsx>{`
				.profile-icon {
					display: flex;
					background-color: white;
					padding: 5px 10px 5px 10px;
					border-radius: 26px;
					cursor: pointer;
				}
				.bar-container {
					margin-top: 6px;
					margin-right: 4px;
				}
				.bar {
					height: 2px;
					width: 15px;
					background-color: #333;
					margin-top: 4px;
				}
			`}</style>
		</>
	)
};

export default ProfileBtn;
