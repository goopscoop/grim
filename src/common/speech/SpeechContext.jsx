import React, {createContext, useReducer, useEffect} from 'react';
import getSpeechStrings, {getAllieDefaultText} from './en.js';

let speechContext;
const getSpeechContext = () => {
  if (!speechContext) {
    speechContext = createContext({});
  }
  return speechContext;
};

// TIMING
const SPEECH_BUBBLE_TIMEOUT = 4000;
const DELAY_BETWEEN_SPEECH_BUBBLES_WITH_ALLIE = 1900;
const DELAY_BETWEEN_SPEECH_BUBBLES_SOLO = 500;

// REDUCER TYPES
const RESET = 'RESET';
const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
const SHIFT_KULT_QUEUE = 'SHIFT_KULT_QUEUE';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const HIDE_MESSAGE = 'HIDE_MESSAGE';
const SHIFT_ALLIE_QUEUE = 'SHIFT_ALLIE_QUEUE';

const initialState = {
  ...getSpeechStrings('default'),
  show: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_CONVERSATION: {
      const {kult, allie} = getSpeechStrings(action.key);
      return {
        ...state,
        kult,
        allie: allie || state.allie
      };
    }
    case SHIFT_KULT_QUEUE:
      const {
        kult
      } = state;
      return {
        ...state,
        kult: kult.slice(1)
      };
    case SHIFT_ALLIE_QUEUE:
      const {
        allie
      } = state;
      return {
        ...state,
        allie: allie.length > 1 ? allie.slice(1) : initialState.allie
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
  const getDelay = (allyState) => {
    console.log(allyState[0], getAllieDefaultText())
    const isConversation = allyState[0] !== getAllieDefaultText();
    console.log(isConversation)
    return isConversation ? DELAY_BETWEEN_SPEECH_BUBBLES_WITH_ALLIE : DELAY_BETWEEN_SPEECH_BUBBLES_SOLO;
  }

  useEffect(() => {
    if (state.kult.length) {
      showMessage();

      let delayTimeout;
      const messageTimeout = setTimeout(() => {
        dispatch({type: HIDE_MESSAGE});
        dispatch({type: SHIFT_ALLIE_QUEUE})
        console.log(getDelay(state.allie))
        delayTimeout = setTimeout(() => {
          dispatch({type: SHIFT_KULT_QUEUE});
        }, getDelay(state.allie));
      }, SPEECH_BUBBLE_TIMEOUT);

      return () => {
        clearTimeout(messageTimeout);
        clearTimeout(delayTimeout);
      }
    }

  }, [state.kult]);


  const beginConversation = (key) => {
    
    // Buffer conversation so it's not jarring
    if (state.kult.length) {
      dispatch({type: RESET});

      setTimeout(() => {
        dispatch({
          type: RECEIVE_CONVERSATION,
          key
        });
      }, 200);
      return;
    }

    dispatch({
      type: RECEIVE_CONVERSATION,
      key
    });
  };

  return (
    <SpeechContext.Consumer>
      {(context) => {
        return <SpeechContext.Provider value={{
          beginConversation,
          showMessage,
          hideMessage,
          allieSpeech: state.allie[0],
          currentSpeech: state.kult[0],
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
