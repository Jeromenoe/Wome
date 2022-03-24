import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileDetails from "./ProfileDetails";

const ProfileBtn = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const showMenu = () => {
		setMenuVisible(!menuVisible);
	}
	return (
		<>
			<div className='profile-icon' onClick={showMenu}>
				<div className='bar-container'>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>
				<AccountCircleIcon style={{ color: '#333', fontSize: '34px' }} />
			</div>
			{menuVisible &&
				<ProfileDetails />
			}
			<style jsx>{`
				.profile-icon {
					display: flex;
					background-color: white;
					padding: 3px 10px 3px 10px;
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
					border-radius: 4px;
				}
			`}</style>
		</>
	)
};

export default ProfileBtn;
