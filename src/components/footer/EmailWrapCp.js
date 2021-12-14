import React from 'react';
import styled from '../../style';

import TitleCp from '../common/TitleCp';
import ContentCp from '../common/ContentCp';
import EmailCp from './EmailCp';

const Wrapper = styled.div``;

const EmailWrapCp = () => {
  return (
    <Wrapper>
      <TitleCp txt="Newsletter Sign Up" />
      <ContentCp txt="Receive our latest updates about our products and promotions." />
      <EmailCp />
    </Wrapper>
  );
};

export default React.memo(EmailWrapCp);
