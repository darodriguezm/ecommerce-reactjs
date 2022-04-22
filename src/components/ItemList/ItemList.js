import React from 'react';
import Item from '../Item/Item';

const Itemlist = ({ products }) => {

    return (
        products.map((product) => {
            return <Item product={product} key={product.id}></Item>
        })
    );
}

export default Itemlist;
