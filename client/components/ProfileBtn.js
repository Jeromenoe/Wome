import React, { useState, useEffect, useRef } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileDetails from "./ProfileDetails";

const ProfileBtn = ({ token }) => {
	const [isComponentVisible, setIsComponentVisible] = useState(false);
	const ref = useRef(null);
	const refBtn = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			if (refBtn.current && !refBtn.current.contains(event.target)) {
				setIsComponentVisible(false);
			}
		}
	};

	const escFunction = (event) => {
		if (event.key === "Escape") {
			setIsComponentVisible(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		document.addEventListener("keydown", escFunction, false);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
			document.removeEventListener("keydown", escFunction, false);
		};
	}, []);

	const handleProfileClick = () => {
		setIsComponentVisible(!isComponentVisible);
	}
	return (
		<>
			<div className='profile-icon' onClick={handleProfileClick} ref={refBtn}>
				<div className='bar-container'>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>
				<AccountCircleIcon style={{ color: '#333', fontSize: '34px' }} />
			</div>
			<div ref={ref}>
				{isComponentVisible && <ProfileDetails token={token}/>}
			</div>
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
