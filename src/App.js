//React imports
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

//MUI imports
import { Typography } from '@mui/material';

//File imports
import Login from './views/Login';
import Dashboard_Medic from './views/Medic/Dashboard_Medic';
import Dashboard_Patient from './views/Patient/Dashboard_Patient';
import Patients from './views/Medic/Patients';
import New_Appointment from './views/Patient/New_Appointment';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<div>Page header <Outlet /></div>}>
        
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/medic" element={<Dashboard_Medic />} >
            <Route path="/medic/patients" element={<Patients />} />
        </Route>

        <Route path="/patient" element={<Dashboard_Patient />}>
            <Route path="/patient/appointment" element={<New_Appointment />} />
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
