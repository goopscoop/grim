import React from 'react';
import background from './media/bg1.jpg';

const Background = () => {
  const style = {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    width: '100%'
  }
  return (
      <img
        style={style}
        src={background}
     />
  );
};

export default Background;