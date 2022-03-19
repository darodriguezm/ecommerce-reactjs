import React from 'react';
import { styled } from '@mui/material/styles';

const ItemListContainer = ({ greeting, children }) => {

    const InternalContainer = styled('div')(({ theme }) => ({
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // position: 'relative',
        // top: 50,
        backgroundImage: 'linear-gradient(to left, #bbd16b, #8cd68b, #60d5af, #45d1ce, #54cae2, #5ecbe8, #69ccee, #74cdf3, #66d9f8, #5be5fa, #57f0f7, #5ffbf1)',
        justifyContent: 'center',
        color: '#aaffff',
        boxSizing: 'content-box',
        paddingBottom: 5
    }))

    const H1Styled = styled('h1')(({ template }) => ({
        width: '100%',
        display: 'inline-block',
        textAlign: 'center'
    }))

    return (
        <InternalContainer>
            <H1Styled>{greeting}</H1Styled>
            {children}
        </InternalContainer>
    )
}

export default ItemListContainer;