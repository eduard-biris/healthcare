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
import Medical_History from './views/Patient/Medical_History';
import Current_Health from './views/Patient/Current_Health';
import Demand_Document from './views/Patient/Demand_Document';
import Chat_Patient from './views/Patient/Chat_Patient';

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

        <Route path="/medic" element={<Dashboard_Medic />} >
            <Route path="/medic/patients" element={<Patients />} />
        </Route>

        <Route path="/patient" element={<Dashboard_Patient />}>
            <Route path="/patient/appointment" element={<New_Appointment />} />
            <Route path="/patient/history" element={<Medical_History />} />
            <Route path="/patient/status" element={<Current_Health />} />
            <Route path="/patient/document" element={<Demand_Document />} />
            <Route path="/patient/chat" element={<Chat_Patient />} />
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
