import React from 'react';
import Scene1 from './scene1';
import Menu from './Menu';
import { useMediaQuery } from 'react-responsive'
import './App.css';
import { DeviceProvider } from './Queries/DeviceContext';
import DevTools from './DevTools';

function App() {
  return (
    <DeviceProvider>
      <div id='black-bg'>
        <div className="App">
          <Menu />
          <Scene1 />
        </div>
      </div>
    </DeviceProvider>
  );
}

export default App;
