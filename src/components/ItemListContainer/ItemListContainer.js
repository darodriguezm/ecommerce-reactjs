import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FlexColumn from '../FlexColumn/FlexColumn';
import mockData from '../../assets/data/products.json';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoaded(false);

        const getData = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve(mockData);
                }, 2000);
            });
        };

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
        justifyContent: 'center',
        color: '#000',
        boxSizing: 'content-box',
        paddingBottom: 5
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
                        <CircularProgress />
                }
            </InternalContainer>
        </FlexColumn>

    )
}

export default ItemListContainer;