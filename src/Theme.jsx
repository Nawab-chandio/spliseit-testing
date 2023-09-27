import { createTheme } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: 'Lexend',
		fontSize: 11,
	},

	palette: {
		primary: {
			main: '#0271C9',
		},
		secondary: { main: '#0271C9' },
	},
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					textTransform: 'capitalize',
					// background: 'linear-gradient(180deg, #3BADD3 0%, #048CC7 96%)',
					color: '#fff',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {},
			},
		},
	},
});

export default theme;
