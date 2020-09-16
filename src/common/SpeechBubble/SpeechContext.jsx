import React, {createContext, useState, useReducer} from 'react';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

let speechContext;
const getSpeechContext = () => {
  if (!speechContext) {
    speechContext = createContext({});
  }
  return speechContext;
};

const SPEECH_BUBBLE_TIMEOUT = 4000;
const DELAY_BETWEEN_SPEECH_BUBBLES = 2000;
const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
const SHIFT_QUEUE = 'SHIFT_QUEUE';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const HIDE_MESSAGE = 'HIDE_MESSAGE';
const initialState = {
  queue: [],
  show: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_QUEUE:
      return {
        ...state,
        queue: action.queue
      };
    case SHIFT_QUEUE:
      return {
        ...state,
        queue: state.queue.slice(1)
      };
    case SHOW_MESSAGE:
      return {
        ...state,
        show: true
      };
    case HIDE_MESSAGE:
      return {
        ...state,
        show: false
      }
    default:
      return state;
  }
};

export const SpeechProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const SpeechContext = getSpeechContext();

  const showMessage = () => {
    dispatch({type: SHOW_MESSAGE});
  };

  useEffect(() => {
    if (state.queue.length) {
      showMessage();

      let delayTimeout;
      const messageTimeout = setTimeout(() => {
        dispatch({type: HIDE_MESSAGE});
        
        delayTimeout = setTimeout(() => {
          dispatch({type: SHIFT_QUEUE});
        }, DELAY_BETWEEN_SPEECH_BUBBLES);
      }, SPEECH_BUBBLE_TIMEOUT);

      return () => {
        clearTimeout(messageTimeout);
        clearTimeout(delayTimeout);
      }
    }

  }, [state.queue]);

  const beginConversation = arr => {
    dispatch({
      type: RECEIVE_QUEUE,
      queue: arr
    });
  };

  return (
    <SpeechContext.Consumer>
      {(context) => {
        return <SpeechContext.Provider value={{
          beginConversation,
          showMessage,
          currentSpeech: state.queue[0],
          show: state.show
        }}>
          {children}
        </SpeechContext.Provider>
      }}
    </SpeechContext.Consumer>
  );
}

export const useSpeech = () => {
  return React.useContext(getSpeechContext());
}
