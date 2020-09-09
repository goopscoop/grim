import React from 'react';
import Scene1 from './scene1';
import Menu from './Menu';
import { useMediaQuery } from 'react-responsive'
import './App.scss';
import { DeviceProvider } from './Queries/DeviceContext';
import DevTools from './DevTools';
import PatreonBtn from './common/Patreon';

// TODO: 
// 1. Build full support for portait mode
// 2. Add break points for small phone/big phone
// 3. Add break points for small tablet/big tablet

function App() {
  return (
    <DeviceProvider>
      <DevTools />
      <div id='black-bg'>
        <div className="App">
          <Menu />
          <Scene1 />
          <PatreonBtn />
        </div>
      </div>
    </DeviceProvider>
  );
}

export default App;
