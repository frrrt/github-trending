import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { deepOrange, lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            contrastText: 'rgba(255, 255, 255, 0.87)',
            light: lightBlue[200],
            main: lightBlue[500],
            dark: lightBlue[700],
        },
        secondary: {
            contrastText: 'rgba(255, 255, 255, 0.87)',
            light: deepOrange[200],
            main: deepOrange[500],
            dark: deepOrange[700],
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default responsiveFontSizes(theme);
