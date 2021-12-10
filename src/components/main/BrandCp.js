import React, { useState, useEffect } from 'react';
import styled, { media } from '../../style';
import Slider from 'react-slick';
import { brandApi } from '../../modules/api';

const Wrapper = styled.div``;
const Brand = styled.div`
  border: 1px solid red;
  & img {
    width: 100%;
  }
`;

const slideConfig = {
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
};

const BrandCp = () => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    (async () => {
      setBrand(await brandApi(3));
    })();
  }, []);
  return (
    <Wrapper>
      <Slider {...slideConfig}>
        {brand.map((v, i) => (
          <Brand key={i}>
            <img src={v.src} alt={v.id} />
          </Brand>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default React.memo(BrandCp);
