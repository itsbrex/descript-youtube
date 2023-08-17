import React, { useState, useEffect } from 'react';
import { ThemeProvider, StyledEngineProvider, createTheme, adaptV4Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	'@global': {
		'*::-webkit-scrollbar': {
			width: '0px',
		},
		'*::-webkit-scrollbar-thumb': {
			background: 'transparent',
		},
		'*::-webkit-scrollbar': {
			visibility: 'hidden !important',
		},
	},
	root: {},
	switch: {},
}));


const themeSettings = {
	palette: {
		primary: {
			main: '#0062ff',
		},
		secondary: {
			main: '#0062ff',
		},
		error: {
			main: '#0062ff',
		},
	},
	components: {
		MuiSwitch: {
			styleOverrides: {
				switchBase: {
					color: '#0062ff',
					'&.Mui-checked': {
						color: '#0062ff',
					},
					'&.Mui-checked + .MuiSwitch-track': {
						backgroundColor: '#0062ff',
					},
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
					'@global': {
						'*::-webkit-scrollbar': {
							width: '0px',
							visibility: 'hidden',
							background: 'transparent',
						},
				},
			},
		},
	}
};


const lightTheme = createTheme(adaptV4Theme({
	...themeSettings,
	palette: {
		...themeSettings.palette,
		type: 'light',
		background: {
			default: '#fff',
		},
	},
}));

const darkTheme = createTheme(adaptV4Theme({
	...themeSettings,
	palette: {
		...themeSettings.palette,
		type: 'dark',
		background: {
			default: '#12100f',
		},
	},
}));

export default function MyApp(props) {
	const { Component, pageProps } = props;
	const [darkMode, setDarkMode] = useState(true);
	const theme = darkMode ? darkTheme : lightTheme;
	const classes = useStyles(theme);

	useEffect(() => {
			const jssStyles = document.querySelector('#jss-server-side');
			if (jssStyles) {
					jssStyles.parentElement.removeChild(jssStyles);
			}
	}, []);

	return (
			<StyledEngineProvider injectFirst>
					<ThemeProvider theme={theme}>
							<CssBaseline />
							<div className={classes.root}>
									<div className={classes.switch}>
										<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
									</div>
									<Component {...pageProps} />
							</div>
					</ThemeProvider>
			</StyledEngineProvider>
	);
}
