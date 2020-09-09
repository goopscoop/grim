import React from 'react';
import tag from './media/topBecomes.png'
import { useDevice } from '../Queries/DeviceContext';

const style = {
  position: 'absolute',
  zIndex: 1,
  left: '40vw',
  bottom: '4vh'
};

const Tag = () => {
  const {isMobile} = useDevice();

  if (isMobile) {
    return null;
  }

  return (
    <img
      src={tag}
      style={style} />
  );
};

export default Tag;