import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfileDetails = () => {
	const router = useRouter()
	const goToSignUp = (e) => {
		e.preventDefault()
		router.push('signup')
	}
	const goToSignIn = (e) => {
		e.preventDefault()
		router.push('signin')
	}
	return (
		<>
			<div style={{ position: 'relative'}}>
				<ul className="menu">
					<li className="menu-item" onClick={goToSignUp}>
						<Link href="signup">
							<a style={{fontWeight: 'bold'}}>Inscription</a>
						</Link>
					</li>
					<li className="menu-item" onClick={goToSignIn}>
						<Link href="signin">
							<a>Connexion</a>
						</Link>
					</li>
				</ul>
			</div>
			<style jsx>{`
				.menu {
					list-style: none;
					width: 130px;
					position: absolute;
					background-color: white;
					border-radius: 6px;
					left: -125px;
					padding: 5px 0px;
					box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
				}
				.menu-item {
					padding: 7px 10px;
					cursor: pointer;
				}
				.menu-item:hover {
					background-color: #eee;
				}
				a {
					font-size: 16px;
					color: #555
				}
				a:link {
					text-decoration: none;
				}

				a:visited {
					text-decoration: none;
				}
			`}</style>
		</>
	)
};

export default ProfileDetails;
