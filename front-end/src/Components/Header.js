import React from 'react';
import Login from './Login';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #059033;
    padding: 1em 0;
    width: 100%;
    margin-bottom: 1em;
`

export default function Header() {



    return (
        <StyledHeader>
            <h1><span>Water</span><br />My Plants</h1>
            <Login />
        </StyledHeader>
    )
}