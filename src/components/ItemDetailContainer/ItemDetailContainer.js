import React, { useEffect, useState } from 'react'
import mockData from '../../assets/data/product.json';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [empty, setEmpty] = useState(true);

    useEffect(() => {
        const getItem = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve(mockData);
                }, 2000);
            });
        };

        getItem()
            .then((data) => {
                setItem(data);
                setEmpty(false);
            }).catch((error) => console.error(error));
    }, []);

    return (
        !empty && <ItemDetail item={item} />
    )
}

export default ItemDetailContainer