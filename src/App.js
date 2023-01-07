//React imports
import { Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

//File imports
import Home from './views/Home';
import Register from './views/Register';
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

        <Route path="/home" element={<Home />} >
          <Route path="/home/login" element={<Login />} />
          <Route path="/home/register" element={<Register />} />
        </Route>

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

        <Route path="*" element={<Navigate to="home/login"/>} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;
