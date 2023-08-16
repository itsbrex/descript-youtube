import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import { CssBaseline, Switch } from '@material-ui/core';

// Create a theme instance.
const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#004ecc'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          visibility: 'hidden !important'
        }
      }
    }
  }
})

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#004ecc'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#12100f'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          visibility: 'hidden !important'
        }
      }
    }
  }
})

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
}

export default Theme
