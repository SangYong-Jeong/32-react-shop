import React from 'react';
import { Link } from 'react-router-dom';
import styled, { Underline, color } from '../../style';

const ListWrap = styled.li`
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  padding: 0.5em 0;
  font-weight: 500;
  display: block;
  transition: all 0.5s;
  &:hover {
    color: ${color.danger};
  }
`.withComponent(Link);

const List = styled.a`
  padding: 0.25em 0;
  font-weight: 400;
  display: block;
  color: ${color.lightBlack};
`
  .withComponent(Underline)
  .withComponent(Link);

const SubNaviCp = ({ data }) => {
  return (
    <ListWrap>
      <Title to="/">{data.title}</Title>
      {data.children.map((v, i) => (
        <List to="/" key={i} color={color.primary}>
          {v.title}
        </List>
      ))}
    </ListWrap>
  );
};

export default SubNaviCp;
