import React from 'react';
import styled, { css } from '../style/index';

import HeaderCp from '../components/inc/HeaderCp';
import TestNavi from '../components/TestNavi';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Main = () => {
  return (
    <Wrapper>
      <TestNavi />
      <HeaderCp />
      <h1>Main</h1>
    </Wrapper>
  );
};

export default Main;
