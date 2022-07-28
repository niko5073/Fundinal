import React from 'react';
import styled from 'styled-components';



const Btn = styled.button`
font-size: 0.8rem;
  background: #22CC9D;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
  }
  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`;

const Button = ({text, link}) => {
  return (
    <a href={link} aria-label={text} target="_blank" rel="noreferrer" >
    <Btn>{text}</Btn>
    </a>
  )
}

export default Button