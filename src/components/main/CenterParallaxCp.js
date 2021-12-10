import React from 'react';

import styled from '../../style';
import withBannerWrapper from './withBannerWrapper';
import BannerCp from './BannerCp';

const Wrapper = styled.section`
  margin-top: 3em;
  margin-bottom: 2em;
`;

const CenterParallaxCp = ({ banner, id }) => {
  return (
    <Wrapper>
      <BannerCp {...banner} />
    </Wrapper>
  );
};

export default withBannerWrapper(CenterParallaxCp);
