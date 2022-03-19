import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ItemCount({ itemData }) {
    const { itemDescription, itemLimit, onAdd } = itemData;

    const [count, setCount] = useState(itemLimit > 0 ? 1 : 0);

    const addItemCount = () => {
        if (count < itemLimit)
            setCount(count + 1)
    }

    const substractItemCount = () => {
        if (count > 1)
            setCount(count - 1)
    }

    const callOnAdd = () => {
        onAdd(count, itemDescription)
    }

    const BlockWrapper = styled('div')(({ theme }) => ({
        display: 'inline-block'
    }))

    const ItemCountContainer = styled('article')(({ theme }) => ({
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        border: '1px solid #99f',
        boxSizing: 'border-box',
        padding: 3,
        width: 250,
        background: '#FFF',
        color: '#000',
        fontSize: '12px',
        boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.36)',
        margin: 3
    }))

    const IteratorContainer = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #99f',
        boxSizing: 'border-box',
        alignItems: 'center',
        marginBottom: 3
    }))

    const DisplayCounter = styled('div')(({ theme }) => ({
        fontWeight: 'bold',
        color: '#3333FF'
    }))

    return (
        <BlockWrapper>
            <ItemCountContainer>
                <p>{itemDescription}</p>
                <IteratorContainer>
                    <Button variant='text' onClick={substractItemCount}>-</Button>
                    <DisplayCounter>{count}</DisplayCounter>
                    <Button variant='text' onClick={addItemCount}>+</Button>
                </IteratorContainer>
                <Button variant='contained' size="small" disabled={itemLimit <= 0} onClick={callOnAdd}>Agregar al carrito</Button>
            </ItemCountContainer>
        </BlockWrapper>
    )
}
