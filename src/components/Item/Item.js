import { Button, Container } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Item = ({ product }) => {
    const { nombre, precio, imagenMini, stock } = product;
    const [visible, setVisible] = useState(false);

    const ContainerStyled = styled(Container)((theme) => ({
        backgroundColor: 'white',
        marginLeft: 4,
        marginRight: 4,
        paddingTop: 5,
        color: 'maroon',
        border: '1px solid rgb(200,200,200)',
        width: '300px'
    }));

    const changeVisibility = () => {
        setVisible(!visible);
    }

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
                    <Button variant="outlined" onClick={changeVisibility}>Ver detalles</Button>
                </Box>
            </ContainerStyled>
            {
                visible ?
                    <div>
                        <ItemDetailContainer></ItemDetailContainer>
                    </div>
                    : ""
            }

        </>
    );
}

export default Item;