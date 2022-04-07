import React, { useState } from 'react';
import MediaCard from '../MediaCard/MediaCard';

function ItemDetail({ item }) {
    const [itemStored, setItemStored] = useState({});

    item.onAdd = (count) => {
        item.quantity = count;
        setItemStored(item);
        
        alert(`Producto ${item.nombre} cargado con cantidad: ${item.quantity}`);
    }

    return (
        <>
            <MediaCard item={item} />
            {/* <img scr={item.imagenesLg[0]} alt={item.nombre} /> */}
        </>
    )
}

export default ItemDetail