import React from 'react';
import Login from './Login';
import Styled from 'styled-components';

export default function Header() {

    const StyledHeader = Styled.header`
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        background-color: #059033;
        padding: 1em;
    `

    return(
        <StyledHeader>
            <h1 style={{color: 'white'}}>Water Your Plants</h1>
            <Login />
        </StyledHeader>
    )
}