import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { CssBaseline, Switch } from '@mui/material';

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#004ecc'
    },
    secondary: {
      main: '#004ecc'
    },
    error: {
      main: red[500]
    },
    background: {
      default: '#fff'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '*::-webkit-scrollbar': {
            visibility: 'hidden !important'
          }
        }
      }
    }
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#004ecc'
    },
    secondary: {
      main: '#004ecc'
    },
    error: {
      main: red[500]
    },
    background: {
      default: '#12100f'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '*::-webkit-scrollbar': {
            visibility: 'hidden !important'
          }
        }
      }
    }
  }
});

const Theme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // dark mode by default
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
