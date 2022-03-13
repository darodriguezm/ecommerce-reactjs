import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Search from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

const HeaderNavbar = () => {

    const menuItems = ["Productos", "Ofertas", "Marcas", "Segunda selección"];

    return (
        <Box component="div" sx={{ flexGrow: 1, display: 'flex', position: 'sticky', backgroundColor: "rgba(150,150,150, 0.2)", justifyContent: 'space-between', paddingTop: 2, paddingLeft: 3 }}>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                {
                    menuItems.map((item) => {
                        return <Button variant="text">{item}</Button>
                    })
                }
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'end' }}>
                <Search sx={{ marginRight: 2 }}/>
                <Badge badgeContent={4} color="primary"  sx={{ marginRight: 2 }}>
                    <AddShoppingCart color="action" />
                </Badge>
                <Badge badgeContent={4} color="primary" sx={{ marginRight: 2 }}>
                    <AccountCircle />
                </Badge>
            </Box>
        </Box>
    );
}

export default HeaderNavbar;
