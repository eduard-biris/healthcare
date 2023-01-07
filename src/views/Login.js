//React imports
import React from "react";
import { useState, useEffect } from "react";

//MUI imports
import { CssBaseline, Grid, Box, Typography, TextField, Button, Link } from '@mui/material';
import { useTheme } from "@mui/material/styles";

//Other imports
import { GrGoogle } from 'react-icons/gr';

//Router imports
import { useNavigate } from 'react-router-dom';

//File imports
import '../styles/Login.css';

//Firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase_setup/firebase';


const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;


const Login = (props) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
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

    const handleEmailChanged = (event) => {
        setFormData({
            ...formData,
            email: event.target.value
        });
    }

    const handlePasswordChanged = (event) => {
        setFormData({
            ...formData,
            password: event.target.value
        });
    }

    return (
        <Grid container sx={styles.mainGrid}>
            <CssBaseline />

            <Grid item xs={6} sx={styles.sideGrid}>
                <Box sx={{textAlign: 'center', mt: 10}}>
                    <Typography component="h1" variant="h3" sx={styles.smallHeader}>
                        Sistemul tău sanitar Online
                    </Typography>

                    <Typography component="h1" variant="h5" sx={styles.smallHeader}>
                        Niciodată nu a fost mai ușor să îți administrezi situația medicală.
                    </Typography>

                    <Typography component="h1" variant="h5" sx={styles.smallHeader}>
                        Medici și pacienți adunați la un loc, departe de cabinetele aglomerate și de statul la coadă.
                    </Typography>

                    <Typography component="h1" variant="h5" sx={styles.smallHeader}>
                        Completează-ți dosarul medical și ține legătura cu medicul tău de familie direct din contul tău.
                    </Typography>

                    <Typography component="h1" variant="h5" sx={styles.smallHeader}>
                        Cere și eliberează adeverințe medicale și rețete online, fără a fi nevoie să îți aștepți rândul la cabinet.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={6} sx={styles.sideGrid}>
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
                            autoComplete="email"
                            autoFocus
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Conectare
                        </Button>
                        <Grid container>
                            <Grid item xs={6} sx={{textAlign: "left"}}>
                                <Link href="#" variant="body2">Ai uitat parola?</Link>
                            </Grid>
                            <Grid item xs={6} sx={{textAlign: "right"}}>
                            <Link href="#" variant="body2">Nu ai cont? Înregistrează-te</Link>
                            </Grid>
                        </Grid>
                    </Box>

                    <Button variant="outlined" startIcon={<GrGoogle />} sx={{mt: 10}}>Conectare cu Google</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login;