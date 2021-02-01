import React from 'react'
import { Link } from 'react-router-dom';
import {
  Container,
  Features,
  FeaturesContent,
  FeaturesContentTitle,
  FeaturesContentWrapper,
  H1,
  H2,
  LeftRightWrapper,
  LeftWrapper,
  LeftWrapperDiv,
  LeftWrapperSpan,
  RightWrapper,
  RightWrapperDiv,
  RightWrapperSpan,
  P,
  SignUp,
  Title,
  TitleImage,
  Wrapper
} from './style/content';
import TitleImg from './images/pic01.jpg';
import {
  FaLaptop,
  FaSignal,
  FaMapMarkerAlt,
  FaBolt,
  FaCog,
  FaCode
} from "react-icons/fa";

export const Content = () => {
    return (
      <Container>
        <Wrapper>
          
          <TitleImage>
            <img src={ TitleImg } alt="Plants" width="100%" height="100%" style={{objectFit:'cover'}} />
          </TitleImage>
          <Title>
          <P>
              <b>Got plants? Sign Up for Water My Plants today!</b>
          </P>
          <H2>
              <button className="signUpButton" style={{width: '20em', height: '5em'}}>
                <Link to="/signup" style={{fontSize: '1.5em'}}>Sign Up Here</Link>
              </button>
          </H2>
            <P>
              Never forget when it's time to feed your foliage and quench your plants' thirst.
            </P>
              
          </Title>
        </Wrapper>
      </Container>
    )
}

export default Content;