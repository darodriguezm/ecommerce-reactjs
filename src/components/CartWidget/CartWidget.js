import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

export default function CartWidget(props) {
    const { badgeContent } = props;

    const StyledBadge = styled(Badge)(({ theme }) => ({
        marginRight: '1rem',
        marginTop: '10px'
    }))

    return (
        <Link to="/cart">
            <Tooltip title="Carrito" arrow>
                <StyledBadge badgeContent={badgeContent} color="primary">
                    <AddShoppingCart color="action" />
                </StyledBadge>
            </Tooltip>
        </Link>
    )
}
