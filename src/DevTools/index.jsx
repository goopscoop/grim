import React from 'react';
import { useDevice } from '../Queries/DeviceContext';

const DevTools = () => {
  const {
    isDesktop,
    isBigScreen,
    isTablet,
    isMobile,
    isPortrait,
    isRetina,
    prefix
  } = useDevice();

  return <div style={{
    position: 'absolute',
    top: 0,
    height: 20,
    width: '100%',
    backgroundColor: '#FFDB55',
    zIndex: 10001
  }}>
    {isDesktop && 'Desktop mode '}
    {isBigScreen && 'Bigscreen mode '}
    {isTablet && 'Tablet mode '}
    {isMobile && 'Mobile mode '}
    {isPortrait && 'Portrait mode '}
    {isRetina && 'Retina mode '}
    {` PREFIX: ${prefix}`}
  </div>;
};

export default DevTools;
