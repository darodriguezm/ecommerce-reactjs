import React, { useContext, useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import CartWidget from '../CartWidget/CartWidget';
import ProfileWidget from '../ProfileWidget/ProfileWidget';
import CustomizedMenus from '../CustomizedCategorysMenu/CustomizedCategorysMenu';
import LinkStyled from '../LinkStyled/LinkStyled';
import LocalCartContext from '../../context/CartConext';

const HeaderNavbar = () => {
    const [actualScrollY, setActualScrollY] = useState();
    const { products } = useContext(LocalCartContext);
    const menuItems = [
        {
            caption: "Productos",
            route: "/"
        }
        , {
            caption: "Ofertas",
            route: "/ofertas"
        }
        ,
        {
            caption: "Segunda selección",
            route: "/segundaseleccion"
        }
    ];

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
        paddingBottom: 1,
        zIndex: 1,
        opacity: actualScrollY > 0 ? 0.8 : 1,
        transition: 'opacity 0.5s'
    };

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

    useEffect(() => {
        const scrollHandler = () => setActualScrollY(window.scrollY)

        window.addEventListener('scroll', scrollHandler, true)

    }, []);

    return (
        <Box component="header" sx={principalBoxStyle}>
            <Box component="ul" sx={{ flexGrow: 1, display: 'flex', margin: 0, padding: 0 }}>
                {
                    menuItems.map((item, index) => {
                        return <LinkStyled to={item.route} key={index}>
                            <Button component="li" variant="text" sx={
                                {
                                    marginLeft: 2,
                                    color: 'rgb(140,140,140)',
                                    '&:hover': {
                                        backgroundColor: '#000',
                                        color: '#fff',
                                    }
                                }
                            }>{item.caption}</Button>
                        </LinkStyled>
                    })
                }
                <li style={{ listStyle: 'none'}}>
                    <CustomizedMenus />
                </li>
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
                <CartWidget badgeContent={products.reduce((previo, actual) => previo + actual.quantity, 0)}/>
                <ProfileWidget />
            </Box>
        </Box >
    );
}

export default HeaderNavbar;
