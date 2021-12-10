/* High Order Component */
import React, { useEffect, useState } from 'react';
import { bannerApi } from '../../modules/api';

const withBannerWrapper = (OriginComponent) => {
  const Component = (props) => {
    const [banner, setBanner] = useState(null);
    useEffect(() => {
      (async () => {
        const [data] = await bannerApi(props.id);
        setBanner(data);
      })();
    }, [props.id]);
    const combineProps = { ...props, banner };
    return <OriginComponent className={props.className} {...combineProps} />;
  };
  return React.memo(Component);
};

export default withBannerWrapper;
