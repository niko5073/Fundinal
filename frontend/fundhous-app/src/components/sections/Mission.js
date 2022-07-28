import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Carousel from '../Carousel';
import Button from '../Button';
import {dark} from '../../styles/Theme';


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.body2};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;
//background-color: lightblue;

display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxxl};
  text-transform: capitalize;
  color: ${props => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 0 auto;
`

const SubText = styled.p`
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight: 400;
`
const SubTextLight = styled.p`
  font-size: ${props => props.theme.fontlg};
  color: ${props => `rgba(${props.theme.bodyRgba} , 0.6)`};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight: 400;
`
const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;
color: ${props => props.theme.hover};
`
const FundhousContainer = styled.div`
  color: ${props => props.theme.hover};
`


const Mission = () => {
  return (
    <Section>
      <Container>
        <Box> <Carousel />  </Box>
        <Box>
         <Title>Welcome To
          <FundhousContainer>
            Fundhous.
          </FundhousContainer>
        </Title>
        <SubText>
          The largest real estate syndicate run by the PEOPLE.
        </SubText>
        <SubTextLight>
        With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
        </SubTextLight>
        <ButtonContainer>
        <ThemeProvider theme={dark}>
        <Button text="JOIN NOW" link="#" />
        </ThemeProvider>
        </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default Mission