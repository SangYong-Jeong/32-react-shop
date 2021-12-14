import React from 'react';
import Slider from 'react-slick';
import withSnsWrapper from './withSnsWrapper';
import styled, { SmallContainer, color, font } from '../../style';

import RideCp from './RideCp';

const Wrapper = styled.section`
  background-color: ${color.cyan};
  padding: 5em 0;
  margin: 5em 0;
`;

const TitleWrap = styled.div`
  text-align: center;
  color: ${color.dark};
  font-family: ${font.en};
  margin-bottom: 3em;
`;

const Title = styled.h2`
  font-size: 3em;
  font-weight: 500;
  margin-bottom: 0.5em;
`;

const SubTitle = styled.p`
  font-size: 1.25em;
`;

const RideWrapperCp = ({ list, slideConfig }) => {
  return (
    <Wrapper>
      <SmallContainer>
        <TitleWrap>
          <Title>#Where2Ride</Title>
          <SubTitle>
            Phasellus lorem malesuada ligula pulvinar milance.
          </SubTitle>
        </TitleWrap>
        <Slider {...slideConfig}>
          {list.map((v, i) => (
            <RideCp {...v} key={i} />
          ))}
        </Slider>
      </SmallContainer>
    </Wrapper>
  );
};

export default withSnsWrapper(React.memo(RideWrapperCp));
