import React from 'react';
import {RightBorder, LeftBorder} from './Border'
import VeilSign from './VeilSign/VeilSign';
import Title from './Title/Title';
import FadeIn from './FadeIn';
import Background from './Background';

const Scene1 = () => {
  return (
    <>
      <FadeIn/>
      <Title />
      <VeilSign />
      <LeftBorder />
      <RightBorder />
      <Background />
    </>
  );
}

export default Scene1;