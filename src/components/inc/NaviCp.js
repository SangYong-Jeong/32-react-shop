import React, { useEffect, useState } from 'react';
import styled from '../../style/index';
import { css } from '@emotion/react';

const Wrapper = styled.div``;

const NaviCp = () => {
  return (
    <Wrapper>
      <h1>네비</h1>
    </Wrapper>
  );
};

export default React.memo(NaviCp);
