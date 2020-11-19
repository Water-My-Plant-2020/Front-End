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
          <Title>
            <H1>
              Water My <br/>Plants
            </H1>
            <P>
              Never forget when it's time to feed your<br/>foliage and quench your plants' thirst.
            </P>
          </Title>
          <TitleImage>
            <img src={ TitleImg } alt="Plants" width="100%" height="100%"/>
          </TitleImage>
          <Features>
            <H2>
              Awesome Features
            </H2>
          </Features>
          <FeaturesContent>
            <FeaturesContentWrapper>
            <FeaturesContentTitle>
              <span style={{fontWeight: 'bold', marginRight: '5px'}}>Etiam tristique libero </span> eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.
            </FeaturesContentTitle>
            <LeftRightWrapper>
              <LeftWrapper>
                <LeftWrapperDiv>
                  <LeftWrapperSpan>
                    <FaLaptop />
                  </LeftWrapperSpan>
                  Consequat tempus
                </LeftWrapperDiv>
                <LeftWrapperDiv>
                  <LeftWrapperSpan>
                    <FaSignal />
                  </LeftWrapperSpan>
                  Libero nullam
                </LeftWrapperDiv>
                <LeftWrapperDiv>
                  <LeftWrapperSpan>
                    <FaMapMarkerAlt />
                  </LeftWrapperSpan>
                  Lorem ipsumcdolor
                </LeftWrapperDiv>
              </LeftWrapper>
              <RightWrapper>
                <RightWrapperDiv>
                  <RightWrapperSpan>
                    <FaBolt />
                  </RightWrapperSpan>
                  Etiam adipiscing
                </RightWrapperDiv>
                <RightWrapperDiv>
                  <RightWrapperSpan>
                    <FaCog />
                  </RightWrapperSpan>
                  Blandit condimentum
                </RightWrapperDiv>
                <RightWrapperDiv>
                  <RightWrapperSpan>
                    <FaCode />
                  </RightWrapperSpan>
                  Nibh amet venenatis
                </RightWrapperDiv>
              </RightWrapper>
            </LeftRightWrapper>
            </FeaturesContentWrapper>
          </FeaturesContent>
          <SignUp>
            <H2>
              <button className="signUpButton">
                <Link to="/signup">Sign Up Here</Link>
              </button>
            </H2>
          </SignUp>
        </Wrapper>
      </Container>
    )
}

export default Content;