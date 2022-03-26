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
import { connect } from 'react-redux';
import axios from 'axios';
import { setToken } from '../redux/actions/tokenActions';
import Header from '../components/Header';
import { setCookies, removeCookies } from 'cookies-next';

const theme = createTheme();

const SignIn = (props) => {
	const router = useRouter()
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		try {
			const res = await axios.post('http://localhost:3001/auth/signin', {
				email: data.get('email'),
				password: data.get('password')
			});
			const token = res.data;
			props.setToken({token: token});
			setCookies('jwt', token);
			router.push('/')
		} catch (error) {
			return <div>An error occured (token)</div>;
		}
	};
	const goToSignUp = (e) => {
		e.preventDefault()
		router.push('signup')
	}
	removeCookies('jwt');
	return (
		<>
			<Header fixed={false}/>
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
							Connexion
						</Typography>
						<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Adresse mail"
								name="email"
								autoComplete="email"
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Mot de passe"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Se connecter
							</Button>
							<Grid container justifyContent="flex-end">
								<Grid item>
									<Link href="signup" variant="body2" onClick={goToSignUp}>
										Vous n'avez pas de compte? S'inscrire
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</>
	);
}

const mapDispatchToProps = {
	setToken: setToken
};

export default connect(null, mapDispatchToProps)(SignIn);