import { Button, Container } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const Item = ({ product }) => {
    const { nombre, precio, imagenMini, stock } = product;

    const ContainerStyled = styled(Container)((theme) => ({
        backgroundColor: 'rgb(255,255,255);',
        marginLeft: 4,
        marginRight: 4,
        paddingTop: 5,
        color: 'rgb(0,0,100);',
        border: '1px solid rgb(200,200,200)'
    }));

    return (
        <ContainerStyled>
            <Box sx={{ textAlign: 'center' }}>
                <img src={imagenMini} alt={nombre} />
            </Box>
            <h3>{nombre}</h3>
            <p>Precio: {precio}</p>
            <p>stock: {stock}</p>
            <Box sx={{ textAlign: 'center' }}>
                <Button variant="outlined">Ver detalles</Button>
            </Box>
        </ContainerStyled>
    );
}

export default Item;