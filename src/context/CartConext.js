import {createContext, useState } from 'react';

const LocalCartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const addProductToCart = (product) => {
        setProducts(product, ...products);
    }

    const data = {
        products,
        addProductToCart
    }

    return (
        <LocalCartContext.Provider value={data}>
            {children}
        </LocalCartContext.Provider>
    )
}

export { CartProvider }
export default LocalCartContext;