import React from 'react';

const sns = {
  ride: [
    {
      id: 1,
      src: '/img/201206_1222.jpg',
      title: 'Viet Nam',
      content: 'Next trip: 07 March 2021 / 1 - 3 Weeks',
    },
    {
      id: 2,
      src: '/img/201206_1223.jpg',
      title: 'Thailand',
      content: 'Next trip: 10 May 2021 / 2 - 4 Weeks',
    },
    {
      id: 3,
      src: '/img/201206_1225.jpg',
      title: 'Indonesia',
      content: 'Next trip: 18 July 2021 / 3 - 5 Weeks',
    },
  ],
  insta: [
    {
      id: 1,
      src: '/img/201206_2333.jpg',
      start: 4.5,
      content:
        'Nam tempus turpis at metus cosmo scelerisque placerat nulla deumantos solicitud de felis. Quisquemos sodales suscipit tortor condimentum. Pellentesque diam delos...',
      wrtier: '- Annie, @annie_le, United Kingdom',
    },
    {
      id: 2,
      src: '/img/201206_2334.jpg',
      start: 4.8,
      content:
        'Nam tempus turpis at metus cosmo scelerisque placerat nulla deumantos solicitud de felis. Quisquemos sodales suscipit tortor condimentum. Pellentesque diam delos...',
      wrtier: '- John Smith, @john_smith97, Australia',
    },
    {
      id: 3,
      src: '/img/201206_2335.jpg',
      start: 3.7,
      content:
        'Nam tempus turpis at metus cosmo scelerisque placerat nulla deumantos solicitud de felis. Quisquemos sodales suscipit tortor condimentum. Pellentesque diam delos...',
      wrtier: '- Jolie, @joliee, United States',
    },
  ],
};

const slideConfig = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const withSnsWrapper = (OriginComponent) => {
  const Component = (props) => {
    const combineProps = { ...props, list: sns[props.id], slideConfig };
    return <OriginComponent {...combineProps} />;
  };
  return React.memo(Component);
};

export default withSnsWrapper;
