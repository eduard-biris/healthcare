//React imports
import React from "react";

//MUI imports
import { CssBaseline, Grid, Box, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

//Router imports
import { Outlet } from 'react-router-dom';


const Home = (props) => {
    const theme = useTheme();

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
               <Outlet />
            </Grid>
        </Grid>
    )
}

export default Home;