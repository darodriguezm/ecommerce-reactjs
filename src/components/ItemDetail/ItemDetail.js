import React, { useContext } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import LocalCartContext from '../../context/CartConext';

function ItemDetail({ item }) {
    const { addProductToCart } = useContext(LocalCartContext);

    item.onAdd = (count) => {
        addProductToCart(item, count);
    }

    return (
        <>
            <MediaCard item={item} />
            {/* <img scr={item.imagenesLg[0]} alt={item.nombre} /> */}
        </>
    )
}

export default ItemDetail