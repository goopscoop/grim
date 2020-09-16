import React, {useEffect} from 'react';
import {RightBorder, LeftBorder} from './Border'
import Kult from './Kult';
import VeilSign from './VeilSign/VeilSign';
import Title from './Title/Title';
import BlackBorder from './BlackBorder';
import Tag from './Tag/Tag';
import FadeIn from './FadeIn';
import { useMediaQuery } from 'react-responsive'
import Background from './Background';
import { useSpeech } from '../common/SpeechBubble/SpeechContext';

const Scene1 = () => {
  const {
    beginConversation
  } = useSpeech();

  useEffect(() => {
    setTimeout(() => {
      beginConversation(['This is working programatically'])
    }, 1000)
  }, []);

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