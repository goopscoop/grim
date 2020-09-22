import React from 'react';
import border from './media/border.png';

const RightBorder = () => {
  const rbstyle = {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    right: 0,
    height: '100%',
    WebkitTransform: 'scaleX(-1)',
    transform: 'scaleX(-1)'
  };
  
  return <img style={rbstyle} src={border} alt="Right border"/>;
};
const LeftBorder = () => {
  const lbstyle = {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    left: 0,
    height: '100%'
  };

  return <img style={lbstyle} src={border} alt="Left border" />;
};

export {
  RightBorder,
  LeftBorder
};