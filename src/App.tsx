import React from 'react';
import './App.css';
import Main from './components/Main';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  return (
    <>
      <PlayerProvider>
        <Main />
      </PlayerProvider>
    </>
  );
}

export default App;
