import React from 'react';
import styled from '../style/index';
import { useParams } from 'react-router';

import TestNavi from '../components/TestNavi';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const PrdView = () => {
  const params = useParams();
  return (
    <Wrapper>
      <TestNavi />
      <h1>Product View {params.id}</h1>
    </Wrapper>
  );
};

export default PrdView;
