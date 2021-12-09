import React from 'react';
import styled, { color, font, media } from '../../style';

import ImageCp from '../common/ImageCp';
import TitleCp from './TitleCp';
import PriceCp from './PriceCp';

const Wrapper = styled.li`
  position: relative;
  cursor: pointer;
  width: 19%;
  margin: 0 1% 1% 0;
  @media ${media.lg} {
    width: 24%;
  }
  @media ${media.md} {
    width: 31.8333%;
    margin: 0 1.5% 1.5% 0;
  }
  @media ${media.sm} {
    width: 48%;
    margin: 0 2% 2% 0;
  }
  @media ${media.xs} {
    width: 97.5%;
    margin: 0 2.5% 2.5% 0;
  }
`;

const InfoWrap = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${font.en};
`;

const ImageWrapper = styled.div`
  position: relative;
  & > :nth-of-type(2) {
    position: absolute;
    top: 0;
    opacity: 0;
  }
`;

const SurfCp = ({ title, price, content, src, link }) => {
  /* render ********/
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageCp alt={title} src={src} width="100%" />
      </ImageWrapper>
      <InfoWrap>
        <TitleCp title={title} />
        <PriceCp price={price} />
      </InfoWrap>
    </Wrapper>
  );
};

export default React.memo(SurfCp);
