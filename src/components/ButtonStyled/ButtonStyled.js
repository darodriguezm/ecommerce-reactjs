import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2e7d32',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#225e25',
                    },
                }
            },
        },
    },
});

const ButtonStyled = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default ButtonStyled;