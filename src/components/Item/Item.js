import { Button, Container } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const { nombre, precio, imagenMini, stock } = product;

    const ContainerStyled = styled(Container)((theme) => ({
        backgroundColor: 'white',
        marginLeft: 4,
        marginRight: 4,
        paddingTop: 5,
        color: 'maroon',
        border: '1px solid rgb(200,200,200)',
        width: '300px'
    }));

    return (
        <>
            <ContainerStyled>
                <Box sx={{ textAlign: 'center' }}>
                    <img src={imagenMini} alt={nombre} />
                </Box>
                <h3>{nombre}</h3>
                <p>Precio: {precio}</p>
                <p>stock: {stock}</p>
                <Box sx={{ textAlign: 'center' }}>
                    <Link to={`/item/${product.id}`} >
                        <Button variant="outlined">Ver detalles</Button>
                    </Link>
                </Box>
            </ContainerStyled>
        </>
    );
}

export default Item;