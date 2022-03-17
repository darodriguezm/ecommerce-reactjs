import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';

const HeaderNavbar = () => {

    const menuItems = ["Productos", "Ofertas", "Marcas", "Segunda selección"];

    const principalBoxStyle = {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap-reverse',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: "rgb(200,200,200)",
        justifyContent: 'space-between',
        boxShadow: 3,
        paddingTop: 1,
        paddingBottom: 1
    };

    const BadgeWrapper = styled('div')(({ theme }) => ({
        marginRight: '1rem',
        marginTop: '10px'
    }))

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: '1rem',
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
        <Box component="header" sx={principalBoxStyle}>
            <Box component="ul" sx={{ flexGrow: 1, display: 'flex', margin: 0, padding: 0 }}>
                {
                    menuItems.map((item, index) => {
                        return <Button component="li" variant="text" key={index} sx={
                            {
                                marginLeft: 2,
                                color: 'rgb(140,140,140)',
                                '&:hover': {
                                    backgroundColor: '#000',//'rgba(215,215,215,0.5)',
                                    color: '#fff',
                                }
                            }
                        }>{item}</Button>
                    })
                }
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'end' }}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Buscar..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <BadgeWrapper>
                    <Badge badgeContent={4} color="primary">
                        <AddShoppingCart color="action" />
                    </Badge>
                </BadgeWrapper>
                <BadgeWrapper>
                    <Badge badgeContent={4} color="primary">
                        <AccountCircle />
                    </Badge>
                </BadgeWrapper>
            </Box>
        </Box>
    );
}

export default HeaderNavbar;
