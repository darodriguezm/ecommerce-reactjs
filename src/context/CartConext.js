import { createContext, useState } from 'react';

const LocalCartContext = createContext();

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProductToCart = (product, quantity) => {
        const { id, nombre, precio, categoria, imagenMini } = product;
        
        const productToStore = {
            quantity,
            id,
            nombre,
            precio,
            categoria,
            imagenMini
        }

        if (!products.some((someProduct) => someProduct.id === product.id)) {
            setProducts([productToStore, ...products]);
        }

    }

    const removeItem = (itemId) => {
        setProducts(products.filter(product => product.id !== itemId));
    }

    const clear = () => {
        setProducts({});
    }

    const isInCart = (id) => {
        return products.some((product) => product.id === id);
    }

    const data = {
        products,
        addProductToCart,
        removeItem,
        clear,
        isInCart
    }

    return (
        <LocalCartContext.Provider value={data}>
            {children}
        </LocalCartContext.Provider>
    )
}

export { CartProvider }
export default LocalCartContext;