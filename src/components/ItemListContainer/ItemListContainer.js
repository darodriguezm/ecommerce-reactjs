import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const ItemListContainer = ({ greeting, children }) => {

    const InternalContainer = styled('div')(({ theme }) => ({
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        background: 'linear-gradient(90deg, rgba(223,236,238,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,1) 83%, rgba(223,236,238,1) 100%);',
        justifyContent: 'center',
        color: '#000',
        boxSizing: 'content-box',
        paddingBottom: 5
    }))

    return (
        <InternalContainer>
            <Typography variant="h3" component="div" sx={{ width: '100%', display: 'inline-block', textAlign: 'center' }} gutterBottom>
                {greeting}
            </Typography>
            {children}
        </InternalContainer>
    )
}

export default ItemListContainer;