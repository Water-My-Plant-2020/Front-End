import React from 'react';
import Login from './Login';
import styled from 'styled-components';
import WaterMyPlantsLogo from './WaterMyPlantsLogo.png'
import { Link } from 'react-router-dom';


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
            <Link to="">
                <img src={WaterMyPlantsLogo} style={{ width: "20em", marginLeft: "1em" }} />
            </Link>
            <Login />
        </StyledHeader>
    )
}