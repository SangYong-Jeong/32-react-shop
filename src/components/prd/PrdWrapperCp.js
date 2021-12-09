import React, { useEffect, useState } from 'react';
import styled, { media } from '../../style';

import { prdApi } from '../../modules/api';

import PrdCp from './PrdCp';

const Wrapper = styled.ul`
  width: 101%;
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  @media ${media.md} {
    width: 101.5%;
  }
  @media ${media.sm} {
    width: 102%;
  }
  @media ${media.xs} {
    width: 102.5%;
  }
`;

const PrdWrapperCp = () => {
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    (async () => setPrd(await prdApi({ section: 'New' })))();
  }, []);
  return (
    <Wrapper>
      {prd.map((v, i) => (
        <PrdCp {...v} key={i} />
      ))}
    </Wrapper>
  );
};

export default React.memo(PrdWrapperCp);
