import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfileDetails = ({ token }) => {
	const router = useRouter();
	console.log(token);
	
	const goToSignUp = (e) => {
		e.preventDefault()
		router.push('/signup')
	}
	const goToSignIn = (e) => {
		e.preventDefault()
		router.push('/signin')
	}

	const goToHome = (e) => {
		e.preventDefault();
		router.push('/');
	}
	
	const goToServices = (e) => {
		e.preventDefault();
		router.push('/services');
	}

	return (
		<>
			<div style={{ position: 'relative'}}>
				<ul className="menu">
					{!token && <>
					<li className="menu-item" onClick={goToSignUp}>
						<Link href="/signup">
							<a style={{fontWeight: 'bold'}}>Inscription</a>
						</Link>
					</li>
					<li className="menu-item" onClick={goToSignIn}>
						<Link href="/signin">
							<a>Connexion</a>
						</Link>
					</li>
					</>}
					{token && <>
					<li className="menu-item" onClick={goToSignIn}>
						<Link href="/signin">
							<a style={{fontWeight: 'bold'}}>Déconnexion</a>
						</Link>
					</li>
					<li className="bar"></li>
					<li className="menu-item" onClick={goToHome}>
						<Link href="/">
							<a>Activités</a>
						</Link>
					</li>
					<li className="menu-item" onClick={goToServices}>
						<Link href="/services">
							<a>Prestations</a>
						</Link>
					</li>
					</>}
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
				.bar {
					height: 1px;
					background-color: #ddd
				}
			`}</style>
		</>
	)
};

export default ProfileDetails;
