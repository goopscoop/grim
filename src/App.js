import React from 'react';
import Scene1 from './scene1';
import Menu from './Menu';
import { useMediaQuery } from 'react-responsive'
import { DeviceProvider } from './Queries/DeviceContext';
import DevTools from './DevTools';
import PatreonBtn from './common/Patreon';
import SpeechBubble from './common/SpeechBubble/SpeechBubble';

import {app, blackBg} from './App.module.scss';
import { SpeechProvider } from './common/SpeechBubble/SpeechContext';

// TODO: 
// 1. Build full support for portait mode
// 2. Add break points for small phone/big phone
// 3. Add break points for small tablet/big tablet

function App() {
  return (
    <DeviceProvider>
      <SpeechProvider>
        <div className={app}>
          <DevTools />
          <Menu />
          <SpeechBubble text='Testing testing 123' />
          <Scene1 />
        </div>
      </SpeechProvider>
    </DeviceProvider>
  );
}

export default App;
