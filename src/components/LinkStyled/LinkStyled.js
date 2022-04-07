import styled from '@emotion/styled';
import React from 'react'
import { Link } from 'react-router-dom';

const LinkStyled = ({ to, key, children }) => {

    const LinkStyled = styled(Link)(({ theme }) => ({
        textDecoration: 'none',
    }));

    return <LinkStyled to={to} key={key}>{children}</LinkStyled>;
}

export default LinkStyled