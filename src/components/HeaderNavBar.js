import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import '../css/navBar.css';

const HeaderNavbar = () => {

    const menuItems = ["Productos", "Ofertas", "Marcas", "Segunda selección"];

    const buttonStyle = { marginLeft: 2, color: 'rgb(140,140,140)' };

    const principalBoxStyle = {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap-reverse',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: "rgb(200,200,200)",
        justifyContent: 'space-between',
        paddingTop: 2,
        boxShadow: 3
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));


    return (
        <Box component="div" sx={principalBoxStyle}>
            <Box component="ul" sx={{ flexGrow: 1, display: 'flex' }}>
                {
                    menuItems.map((item) => {
                        return <Button component="li" className="Button" variant="text" sx={buttonStyle}>{item}</Button>
                    })
                }
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'end' }}>
                <Search className="MarginRight_2">
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Buscar..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Badge badgeContent={4} color="primary" className="MarginRight_2">
                    <AddShoppingCart color="action" />
                </Badge>
                <Badge badgeContent={4} color="primary" className="MarginRight_2">
                    <AccountCircle />
                </Badge>
            </Box>
        </Box>
    );
}

export default HeaderNavbar;
