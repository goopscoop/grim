import React from 'react';
import background from './media/bg1.jpg';

const Background = () => {
  const style = {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
  return (
      <img
        style={style}
        src={background}
        alt="A post apocolyptic city at night. Kult sits in the foreground. Find him to learn more. He watches moving, shifting veil sign. Seek it out. Contact S.C. Barrus, me, if this site is not useable to you and I'll do my best to improve it. Please contact me at scbarrus [at] awayandaway [dot] com."
     />
  );
};

export default Background;