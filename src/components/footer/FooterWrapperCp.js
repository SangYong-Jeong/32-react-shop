import React from 'react';
import styled, { color, Container } from '../../style';

import ContactCp from './ContactCp';
import MenuWrapCp from './MenuWrapCp';
import EmailCp from './EmailCp';
import CopyrightCp from './CopyrightCp';
import CardCp from './CardCp';

const Wrapper = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
`;

const Wrap = styled(Container)`
  display: flex;
`;

const FooterWrapperCp = () => {
  return (
    <Wrapper>
      <Wrap>
        <ContactCp />
        <MenuWrapCp />
        <EmailCp />
      </Wrap>
      <Container>
        <CopyrightCp />
        <CardCp />
      </Container>
    </Wrapper>
  );
};

export default React.memo(FooterWrapperCp);
