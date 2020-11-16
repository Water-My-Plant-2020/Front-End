import React from 'react';
import Login from './Login';
import styled from 'styled-components';

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #059033;
padding: 1em;
`

export default function Header() {



    return(
        <StyledHeader>
            <h1>Water My Plants</h1>
            <Login />
        </StyledHeader>
    )
}