import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FlexColumn from '../FlexColumn/FlexColumn';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import db from '../../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoaded(false);

        const getData = async () => {
            const itemCollection = collection(db, 'productos');
            let productList;
            let productosSnapshot;

            if (id) {
                const itemsFiltred = query(itemCollection, where("categoria", "==", id));
                productosSnapshot = await getDocs(itemsFiltred);

            } else {
                productosSnapshot = await getDocs(itemCollection);
                
            }

            productList = productosSnapshot.docs.map((doc) => {
                let product = doc.data();
                product.id = doc.id;

                return product;
            });

            return productList;
        }

        getData()
            .then((response) => {
                setProducts(id ? response.filter(data => data.categoria === id) : response);
                setLoaded(true);
            })
            .catch((error) => console.error(error));

    }, [id]);

    const InternalContainer = styled('div')(({ theme }) => ({
        display: 'inherit',
        //background: 'linear-gradient(90deg, rgba(245,217,187,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,1) 83%, rgba(245,217,187,1) 100%);',
        // justifyContent: 'center',
        color: '#000',
        boxSizing: 'content-box',
        paddingBottom: 5,
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }))

    return (
        <FlexColumn>
            <Typography variant="h4" component="div" sx={{ width: '100%', display: 'inline-block', textAlign: 'center' }} gutterBottom>
                {greeting + ' ' + (id ? id : '')}
            </Typography>
            <InternalContainer>
                {
                    loaded ?
                        <ItemList products={products} /> :
                        <CircularProgress color="success" />
                }
            </InternalContainer>
        </FlexColumn>

    )
}

export default ItemListContainer;