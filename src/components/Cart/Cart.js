import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LocalCartContext from '../../context/CartConext';
import CartTable from '../CartTable/CartTable';
import './Cart.css';

const Cart = () => {
    const { products, removeItem } = useContext(LocalCartContext);
    const navigate = useNavigate();

    return (
        <div>
            {
                products.length > 0
                    ? <div><CartTable products={products} onRemove={removeItem} />
                        <div className="buttonWrapper">
                            <Button variant="contained">Terminar Compra</Button>
                        </div>
                    </div>
                    : <div><h3>No hay aún artículos en el carrito</h3>
                        <Button variant="outlined" onClick={() => { navigate('/'); }}>Volver a los artículos</Button>
                    </div>
            }
        </div>
    )
}

export default Cart;