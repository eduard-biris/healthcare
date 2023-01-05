import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

import Login from './views/Login';

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
    </Routes>
    </ThemeProvider>
  );
}

export default App;
