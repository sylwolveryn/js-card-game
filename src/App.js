import React from 'react';
import './App.css'
import { HexaGrid } from './components/HexaGrid'
import { HexaMap } from './components/HexaMap';
import { HexaTile } from './components/HexaTile'

function App() {
  return (
    <div className="App">
      <HexaTile />
      <HexaMap numberOfGridElements={6} />
      <HexaGrid numberOfGridElements={76} />
    </div>
  );
}

export default App;
