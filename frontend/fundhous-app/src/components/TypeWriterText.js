import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxxl};
text-transform: capitalize;
width: 120%;
color: ${props => props.theme.text};
align-self: center;

span{
  text-transform: none;
  font-family: 'inter', cursive;
}
.text-1{
  color: #22CC9D;
}

.text-2{
  color: #22CC9D;
}

.text-3{
  color: #22CC9D;
}
`
const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1.5rem;
width: 100%;
align-self: flex-start;
`
const ButtonContainer = styled.div`
width: 100%;
align-self: flex-start;
color: ${props => props.theme.text};
padding-bottom: 3rem;
`
const TypeWriterText = () => {
  return (
    <>
          <Title>
        Discover a new era of
        <Typewriter
          options={{
          autoStart: true,
          loop: true,

        }}
         onInit={(typewriter) => {
          typewriter
            .typeString('<span class="text-1">Real Estate.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">Investing.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3">Crowdfunding.</span>')
            .deleteAll()
            .start()  
        }}
      />

    </Title>
    <SubTitle>Bored of REITs? Try Something New.</SubTitle>
    <ButtonContainer>
    <Button text= "Explore" link="#mission" />
    </ButtonContainer>
    </>
  );
};

export default TypeWriterText