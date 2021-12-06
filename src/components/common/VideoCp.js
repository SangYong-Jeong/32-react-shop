import styled from '../../style';
import React from 'react';
import { Link } from 'react-router-dom';

const Video = styled.video`
  width: ${(props) => props.width};
  max-width: ${(props) => (props.maxWidth ? '100%' : 'auto')};
`;

const VideoCp = ({
  link,
  src,
  alt = '',
  width = 'auto',
  maxWidth = false,
  className = '',
}) => {
  return (
    <div className={className}>
      {link ? (
        <Link to={link}>
          <Video src={src} width={width} alt={alt} muted autoPlay loop />
        </Link>
      ) : (
        <Video src={src} alt={alt} width={width} muted autoPlay loop />
      )}
    </div>
  );
};

export default VideoCp;
