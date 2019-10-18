import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

// Styled component
const NavigDiv = styled.div`
display: flex;
justify-content: center;
background: lightblue;
`;

const navlink = styled.div`
display: flex;
background: red;
text-deceration: none;
border: 2px solid black;
`;

export default function Navig() {

return(

<NavigDiv>
    <nav>

    <NavLink className='navlink' to='/'>HOME</NavLink>

    <NavLink className='navlink' to='/characters'>Characters</NavLink>

    </nav>

</NavigDiv>

)};