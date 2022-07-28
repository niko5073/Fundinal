import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const LogoText = styled.h1`
font-family: 'inter', cursive;
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
  transform: scale(1.1);

}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
         Fundinal.
        </Link>
    </LogoText>
  )
}

export default Logo