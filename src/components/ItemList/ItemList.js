import { Box } from '@mui/material';
import React from 'react';
import Item from '../Item/Item';

const Itemlist = ({ products }) => {

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                products.map((product) => {
                    return <Item product={product} key={product.id}></Item>
                })
            }
        </Box>
    );
}

export default Itemlist;
