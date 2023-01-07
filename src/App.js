//React imports
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

//MUI imports
import { Typography } from '@mui/material';

//File imports
import Login from './views/Login';
import DashboardMedic from './views/Medic/DashboardMedic';
import DashboardPatient from './views/Patient/DashboardPatient';
import Patients from './views/Medic/Patients';
import NewAppointment from './views/Patient/NewAppointment';
import MedicalHistory from './views/Patient/MedicalHistory';
import CurrentHealth from './views/Patient/CurrentHealth';
import DemandDocument from './views/Patient/DemandDocument';
import ChatPatient from './views/Patient/ChatPatient';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/medic" element={<DashboardMedic />} >
            <Route path="/medic/patients" element={<Patients />} />
        </Route>

        <Route path="/patient" element={<DashboardPatient />}>
            <Route path="/patient/appointment" element={<NewAppointment />} />
            <Route path="/patient/history" element={<MedicalHistory />} />
            <Route path="/patient/status" element={<CurrentHealth />} />
            <Route path="/patient/document" element={<DemandDocument />} />
            <Route path="/patient/chat" element={<ChatPatient />} />
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
