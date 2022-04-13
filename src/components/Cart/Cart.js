import React, { useContext } from 'react';
import LocalCartContext from '../../context/CartConext';
import CartTable from '../CartTable/CartTable';

const Cart = () => {
    const { products, removeItem } = useContext(LocalCartContext);

    return (
        <CartTable products={products} onRemove={removeItem} />
    )
}

export default Cart;