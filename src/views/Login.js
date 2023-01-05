//React imports
import React from "react";
import { useState } from "react";

//MUI imports
import { CssBaseline, Grid, Box, Typography, TextField, Button, Link } from '@mui/material';
import { useTheme } from "@mui/material/styles";

//Other imports
import { GrGoogle } from 'react-icons/gr';

//File imports
import '../styles/Login.css';


const Login = (props) => {
    const theme = useTheme();

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

        console.log(event);
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