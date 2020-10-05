import React, {useState} from 'react';
import { useSpeech } from './speech/SpeechContext';
import getSpeechStrings from './speech/en';

export const defaultAnimationVariants = () => ({
  hover: {
    scale: 1.1,
    transition: {duration: 3}
  },
  tap: {
    scale: 0.9,
    transition: {duration: 0.5}
  }
});

// pass the key prefix. This util will store how many times
// an element has been clicked and start the correct conversation
// based on that number.
export const useHandleClickProgression = (conversationKey) => {
  const [timesClicked, setTimesClicked] = useState(0);
  const {beginConversation} = useSpeech();

  const handleClickProgression = () => {
    const key = `${conversationKey}${timesClicked}`;
    console.log(key)
    const doesConversationExist = !!getSpeechStrings(key);

    if (!doesConversationExist) {
      return;
    }

    beginConversation(key);
    setTimesClicked(timesClicked + 1);
  }

  return {handleClickProgression};
}