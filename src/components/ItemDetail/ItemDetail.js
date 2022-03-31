import React from 'react';
import MediaCard from '../MediaCard/MediaCard';

function ItemDetail({ item }) {

    item.onAdd = () => {
        alert('Producto cargado')
    }

    return (
        <MediaCard item={item} />
    )
}

export default ItemDetail