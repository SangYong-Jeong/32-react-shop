import React, { useEffect, useState } from 'react';

import styled from '../../style';
import { bannerApi } from '../../modules/api';
import BannerCp from './BannerCp';

const Wrapper = styled.section`
  margin-top: 1em;
`;

const BottomCp = () => {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    (async () => {
      const [data] = await bannerApi(243);
      setBanner(data);
    })();
  }, []);
  return <Wrapper>{banner ? <BannerCp {...banner} /> : ''}</Wrapper>;
};

export default React.memo(BottomCp);
