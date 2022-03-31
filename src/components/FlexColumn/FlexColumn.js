import React from 'react';
import { styled } from '@mui/material/styles';

function FlexColumn({ children }) {
    const FlexColumn = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    }))

    return (
        <FlexColumn>{children}</FlexColumn>
    )
}

export default FlexColumn