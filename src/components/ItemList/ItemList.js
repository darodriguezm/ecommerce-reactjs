import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import mockData from './products.json';

const Itemlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve(mockData);
                }, 2000);
            });
        };

        getData()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Box sx={{ display: 'flex'}}>
            {
                products.map((product) => {
                    return <Item product={product} key={product.id}></Item>
                })
            }
        </Box>
    );
}

export default Itemlist;
