import React from 'react';
import border from './media/border.png';
import { useMediaQuery } from 'react-responsive'

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
  
  return <img style={rbstyle} src={border} />
};
const LeftBorder = () => {
  const lbstyle = {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    left: 0,
    height: '100%'
  };

  return <img style={lbstyle} src={border} />
};

export {
  RightBorder,
  LeftBorder
};