import React, {createContext, useReducer} from 'react';
import { useEffect } from 'react';

let speechContext;
const getSpeechContext = () => {
  if (!speechContext) {
    speechContext = createContext({});
  }
  return speechContext;
};

// TIMING
const SPEECH_BUBBLE_TIMEOUT = 4000;
const DELAY_BETWEEN_SPEECH_BUBBLES = 1900;

// REDUCER TYPES
const RESET = 'RESET';
const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
const SHIFT_QUEUE = 'SHIFT_QUEUE';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const HIDE_MESSAGE = 'HIDE_MESSAGE';
const SHIFT_ALLIE_QUEUE = 'SHIFT_ALLIE_QUEUE';

const initialState = {
  queue: [],
  allieQueue: ['What can I do for you, Kult?'],
  show: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_QUEUE:
      return {
        ...state,
        queue: action.queue,
        allieQueue: action.allieQueue || state.allieQueue
      };
    case SHIFT_QUEUE:
      const {
        queue
      } = state;

      return {
        ...state,
        queue: queue.slice(1)
      };
    case SHIFT_ALLIE_QUEUE:
      const {
        allieQueue
      } = state;

      return {
        ...state,
        allieQueue: allieQueue.length > 1 ? allieQueue.slice(1) : initialState.allieQueue
      };
    case RESET:
      return initialState;
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

  const showMessage = () => dispatch({type: SHOW_MESSAGE});
  const hideMessage = () => dispatch({type: HIDE_MESSAGE});

  useEffect(() => {
    if (state.queue.length) {
      showMessage();

      let delayTimeout;
      const messageTimeout = setTimeout(() => {
        dispatch({type: HIDE_MESSAGE});
        dispatch({type: SHIFT_ALLIE_QUEUE})

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


  const beginConversation = (speechArr, allieArr) => {
    
    // Buffer conversation so it's not jarring
    if (state.queue.length) {
      dispatch({type: RESET});

      setTimeout(() => {
        dispatch({
          type: RECEIVE_QUEUE,
          queue: speechArr,
          allieQueue: allieArr
        });
      }, 200);
      return;
    }

    dispatch({
      type: RECEIVE_QUEUE,
      queue: speechArr,
      allieQueue: allieArr
    });
  };

  return (
    <SpeechContext.Consumer>
      {(context) => {
        return <SpeechContext.Provider value={{
          beginConversation,
          showMessage,
          hideMessage,
          allieSpeech: state.allieQueue[0],
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
