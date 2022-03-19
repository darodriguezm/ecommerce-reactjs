import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function CartWidget(props) {
    const { badgeContent } = props;

    const StyledBadge = styled(Badge)(({ theme }) => ({
        marginRight: '1rem',
        marginTop: '10px'
    }))

    return (
        <Tooltip title="Perfil" arrow>
            <StyledBadge badgeContent={badgeContent} color="primary">
                <AccountCircle />
            </StyledBadge>
        </Tooltip>
    )
}
