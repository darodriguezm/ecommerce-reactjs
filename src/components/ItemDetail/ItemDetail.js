import React, { useContext, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import LocalCartContext from '../../context/CartConext';
import './ItemDetail.css';
import { Button, Paper } from '@mui/material';
import ButtonStyled from '../ButtonStyled/ButtonStyled';
import { formatearSeparadorDeMiles } from '../../assets/libs/utiles';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ item }) {
    const { nombre, imagenesLg, descripcion, precio, stock } = item;
    const { addProductToCart } = useContext(LocalCartContext);
    const [itemAgregado, setItemAgregado] = useState(false);
    const navigate = useNavigate();

    const agregarItem = (count) => {
        setItemAgregado(true);
        addProductToCart(item, count);
    }

    return (
        <Paper elevation={5} className='ContainerGralLayout'>
            <div className='SubContainerLayout'>
                <div className='FichaLayout'>
                    <span className='ItemDetailTitulo'>{nombre}</span>
                    <p className='ItemDetalles'>{descripcion.join('\n')}</p>
                    <p className='ItemPrecio'>${formatearSeparadorDeMiles(precio)} kg.</p>
                </div>
                {
                    itemAgregado ?
                        <ButtonStyled>
                            <Button variant='contained' onClick={() => navigate('/cart')}>Finalizar compra</Button>
                        </ButtonStyled>
                        :
                        <ItemCount itemDescription={`Disponibilidad máxima: ${stock}`} itemLimit={stock} onAdd={agregarItem} />
                }
            </div>

            <Carousel className='CarouselLayout'>
                {
                    imagenesLg.map((imagenSrc, key) => {
                        return <img src={`/assets/img/productos/${imagenSrc}`} key={key} alt={`${item.nombre}${key}`} />
                    })
                }
            </Carousel>
        </Paper>
    )
}

export default ItemDetail