import React from 'react';
import {RightBorder, LeftBorder} from './Border'
import Kult from './Kult';
import VeilSign from './VeilSign/VeilSign';
import Title from './Title/Title';
import BlackBorder from './BlackBorder';
import Tag from './Tag/Tag';
import FadeIn from './FadeIn';
import { useMediaQuery } from 'react-responsive'
import Background from './Background';

const Scene1 = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  return (
    <>
      <FadeIn/>
      <Title />
      <VeilSign />
      <Tag />
      <LeftBorder />
      <RightBorder />
      <Background />
    </>
  );
}

export default Scene1;