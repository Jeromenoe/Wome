import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from 'next/link'
import Image from "next/image";
import ProfileBtn from "./ProfileBtn";
import { useRouter } from "next/router";
import { checkCookies, getCookie } from 'cookies-next'

const Header = ({ fixed }) => {
	const router = useRouter()
	let token = false;
	const goToHome = (e) => {
		e.preventDefault()
		router.push('/')
	}
	if (checkCookies('jwt')) {
		token = true;
	}
	return (
		<>
			<div className="header">
				<div className="header-container">
					<div className="logo-container img-color" onClick={goToHome} style={{cursor: 'pointer'}}>
						<Image  src='/img/logo_wome.png' alt="" width={130} height={45} />
					</div>
					<div className="profile-container">
						<div className="profile" >
							<ProfileBtn token={token}/>
						</div>
					</div>
				</div>
				<div className="bar"></div>
			</div>
			
			<style jsx>{`
			.header {
				top:0;
				width: 100%;
				position: ${fixed ? 'fixed' : 'static'}; 
				z-index: 100;
				background-color: #fff;
			}
			.header-container {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 10px;
				grid-auto-rows: minmax(70px, auto);
			}
			.bar {
				width: 100%;
				height: 1px;
				background-color: #333;
				margin-bottom: 6px;
			}
			.logo-container {
				grid-column: 2;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.profile-container {
				display: flex;
				justify-content: right;
				align-items: center;
			}
			.profile {
				margin-right: 30px;
			}
			.img-color {
				filter: invert(17%) sepia(3%) saturate(13%) hue-rotate(352deg) brightness(90%) contrast(86%);
			}
			`}</style>
		</>
	);
};

Header.propTypes = {};

export default Header;
