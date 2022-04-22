import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LocalCartContext from '../../context/CartConext';
import ButtonStyled from '../ButtonStyled/ButtonStyled';
import BuyerForm from '../BuyerForm/BuyerForm';
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
                            <ButtonStyled>
                                {/* <Button variant="contained">Terminar Compra</Button> */}
                                <BuyerForm />
                            </ButtonStyled>
                        </div>
                    </div>
                    : <div><h3>No hay aún artículos en el carrito</h3>
                        <ButtonStyled>
                            <Button variant="outlined" onClick={() => { navigate('/'); }}>Volver a los artículos</Button>
                        </ButtonStyled>

                    </div>
            }
        </div>
    )
}

export default Cart;