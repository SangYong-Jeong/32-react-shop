import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../style';

const Wrapper = styled.ul`
  display: flex;
  margin: 1em 0;
`;

const Icon = styled(Link)`
  width: 32px;
  height: 32px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;
`;

const SnsWrapCp = () => {
  return (
    <Wrapper>
      <Icon to="/">
        <i className="fab fa-facebook-f" />
      </Icon>
      <Icon to="/">
        <i className="fab fa-twitter" />
      </Icon>
      <Icon to="/">
        <i className="fab fa-instagram" />
      </Icon>
      <Icon to="/">
        <i className="fab fa-pinterest" />
      </Icon>
      <Icon to="/">
        <i className="fab fa-youtube" />
      </Icon>
      <Icon to="/">
        <i className="fab fa-tiktok" />
      </Icon>
    </Wrapper>
  );
};

export default React.memo(SnsWrapCp);
