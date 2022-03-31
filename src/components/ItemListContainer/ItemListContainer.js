import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FlexColumn from '../FlexColumn/FlexColumn';

const ItemListContainer = ({ greeting, children }) => {

    const InternalContainer = styled('div')(({ theme }) => ({
        display: 'inherit',
        background: 'linear-gradient(90deg, rgba(245,217,187,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,1) 83%, rgba(245,217,187,1) 100%);',
        justifyContent: 'center',
        color: '#000',
        boxSizing: 'content-box',
        paddingBottom: 5
    }))

    return (
        <FlexColumn>
            <Typography variant="h3" component="div" sx={{ width: '100%', display: 'inline-block', textAlign: 'center' }} gutterBottom>
                {greeting}
            </Typography>
            <InternalContainer>
                {children}
            </InternalContainer>
        </FlexColumn>

    )
}

export default ItemListContainer;