import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
  palette: { primary: { main: '#16734b' } },
  typography: { fontFamily: 'Roboto, Arial, sans-serif', button: { textTransform: 'none' } },
  shape: { borderRadius: 8 },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
