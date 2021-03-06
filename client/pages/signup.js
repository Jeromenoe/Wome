import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router'
import axios from 'axios';
import Header from '../components/Header';
import { setCookies } from 'cookies-next'
import Notification from '../components/Notification';



const theme = createTheme();

const SignUp = () => {
	const [notif, setNotif] = React.useState(false);
	const [message, setMessage] = React.useState('');
	const [severity, setSeverity] = React.useState('');
	const router = useRouter()
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		try {
			await axios.post(process.env.API_URL + 'auth/signup', {
				email: data.get('email'),
				password: data.get('password')
			});
			setMessage('Compte créé !');
			setSeverity('success');
			setNotif(false);
			setNotif(true);
			const res = await axios.post(process.env.API_URL + 'auth/signin', {
				email: data.get('email'),
				password: data.get('password')
			});
			const token = res.data;
			setCookies('jwt', token.accessToken);
			router.push('/');
			return;
		} catch (error) {
			if (typeof error.response.data.message === 'string') {
				setMessage(error.response.data.message);
			} else {
				setMessage(error.response.data.message[0]);
			}
			setSeverity('error');
			setNotif(false);
			setNotif(true);
			return;
		}
	};

	const goToSignIn = (e) => {
		e.preventDefault()
		router.push('signin')
	}
	return (
		<>
			<Header fixed={false} />
			<ThemeProvider theme={theme}>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 8,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Inscription
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete="given-name"
										name="firstName"
										required
										fullWidth
										id="firstName"
										label="Prénom"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										fullWidth
										id="lastName"
										label="Nom"
										name="lastName"
										autoComplete="family-name"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id="email"
										label="Adresse mail"
										name="email"
										autoComplete="email"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										name="password"
										label="Mot de passe"
										type="password"
										id="password"
										autoComplete="new-password"
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 4, mb: 2 }}
							>
								S'inscrire
							</Button>
							<Grid container justifyContent="flex-end">
								<Grid item>
									<Link href="signin" variant="body2" onClick={goToSignIn}>
										{"Vous avez déjà un compte? Se connecter"} 
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
			{notif && <Notification message={message} severity={severity} />}
		</>
	);
}

SignUp.getInitialProps = async ({ req, res }) => {
	if (req) {
		res.setHeader('Set-Cookie', 'jwt=deleted;');
	}
	return {};
}; 

export default SignUp;