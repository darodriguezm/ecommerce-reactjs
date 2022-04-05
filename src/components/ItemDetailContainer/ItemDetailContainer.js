import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import mockData from '../../assets/data/products.json';

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [empty, setEmpty] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setItem(mockData.find( (data) => {
            return data.id === id;
        }));

        setEmpty(false);

    }, [id])
    
    return (
        !empty && <ItemDetail item={item} />
    )
}

export default ItemDetailContainer