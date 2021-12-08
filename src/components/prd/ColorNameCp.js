import React from 'react';
import styled from '../../style';

const ColorName = styled.li`
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.code};
`;

const ColorNameCp = ({ name, code }) => {
  return <ColorName code={code}>{name}</ColorName>;
};

export default React.memo(ColorNameCp);
