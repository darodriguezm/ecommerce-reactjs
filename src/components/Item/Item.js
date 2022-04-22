import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import LinkStyled from '../LinkStyled/LinkStyled';
import './Item.css';
import {formatearSeparadorDeMiles} from '../../assets/libs/utiles';
import ButtonStyled from '../ButtonStyled/ButtonStyled';

const Item = ({ product }) => {
    const { nombre, precio, imagenMini, stock } = product;
    const [pointerOver, setPointerOver] = useState(false);

    return (
        <>
            <Paper onPointerOver={ () => setPointerOver(true) } onPointerLeave={ () => setPointerOver(false) } elevation={pointerOver ? 4 : 0} className="ItemContainer">
                <div>
                    <img src={`/assets/img/productos/${imagenMini}`} alt={nombre} className="ItemImagen" />
                </div>
                <span className="ItemTitulo">{nombre}</span>
                <p className='ItemStock'>stock: {stock}</p>
                <p>Precio: ${formatearSeparadorDeMiles(precio)}</p>
                <Box sx={{ justifyContent: 'center' }}>
                    <LinkStyled to={`/item/${product.id}`} >
                    <ButtonStyled>
                        <Button variant="outlined">Ver detalles</Button>
                    </ButtonStyled>

                    </LinkStyled>
                </Box>
            </Paper>
        </>
    );
}

export default Item;