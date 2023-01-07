//React imports
import React from "react";
import { useState } from "react";

//MUI imports
import { Grid, Box, Typography, TextField, Button, Link } from '@mui/material';
import { useTheme } from "@mui/material/styles";

//Other imports
import { GrGoogle } from 'react-icons/gr';

//Router imports
import { useNavigate } from 'react-router-dom';

//File imports
import '../styles/Login.css';

//Firebase imports
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase_setup/firebase';


const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;


const Register = (props) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        checkPassword: ''
    });

    const styles = {
        mainGrid: {
            height: "100vh",
            backgroundColor: theme.palette.background.default
        },
        sideGrid: {
            height: "100%",
        },
        loginBox: {
            borderRadius: "10px",
            width: "75%",
            margin: "auto",
            mx: "auto",
            my: "20%",
            textAlign: "center"
        },
        smallHeader: {
            mt: 5
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!emailRegex.test(formData.email)) {
            console.log('bad email');
            return;
        }

        if(!passwordRegex.test(formData.password)) {
            console.log('bad password');
            return;
        }

        if(!(formData.password === formData.checkPassword)) {
            console.log('passwords dont match');
            return;
        }

        console.log('creating user...');
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log('logged in user:', user);
            })
            .catch(error => {
                console.log('login error:', error);
            })
    }

    const loginWithGoogle = () => {
        const gAuthProvider = new GoogleAuthProvider();
        signInWithPopup(auth, gAuthProvider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                console.log('successfuly logged in user:', user);
            })
            .catch(error => {
                console.log('Error signing in with google:', error);
            })
    }

    const handleEmailChanged = event => {
        setFormData({
            ...formData,
            email: event.target.value
        });
    }

    const handlePasswordChanged = event => {
        setFormData({
            ...formData,
            password: event.target.value
        });
    }

    const handleCheckPasswordChanged = event => {
        setFormData({
            ...formData,
            checkPassword: event.target.value
        });
    }

    return (
        <Box xs={4} sx={styles.loginBox}>
            <Typography component="h1" variant="h4">
                Conectează-te cu un cont existent
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    onChange={handleEmailChanged}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Parolă"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handlePasswordChanged}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Rescrie Parola"
                    type="password"
                    id="check-password"
                    autoComplete="current-password"
                    onChange={handleCheckPasswordChanged}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Crează Cont
                </Button>
                <Grid container>
                    <Grid item xs={12} sx={{textAlign: "center"}}>
                        <Link onClick={() => navigate("/home/login")} variant="body2">Ai deja cont? Contectează-te</Link>
                    </Grid>
                </Grid>
            </Box>

            <Button variant="outlined" startIcon={<GrGoogle />} sx={{mt: 10}} onClick={loginWithGoogle}>Conectare cu Google</Button>
        </Box>
    )
}

export default Register;