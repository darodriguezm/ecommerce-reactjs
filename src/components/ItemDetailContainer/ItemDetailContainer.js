import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebaseConfig';
import { CircularProgress } from '@mui/material';

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [empty, setEmpty] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const docRef = doc(db, 'productos', id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()){
                let product = docSnap.data();
                product.id = docSnap.id;
    
                return product;
    
            } else {
                Navigate('/error404');
            }
        }
        
        getProduct().then((response) => {
            setItem(response)
            setEmpty(false);
        
        }).catch((error) => console.error(error));

    }, [id])

    return (
        empty ? 
        <CircularProgress color="success" />
        : <ItemDetail item={item} />
    )
}

export default ItemDetailContainer