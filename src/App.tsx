import './App.css';
import Main from './components/Main';
import { PlayerProvider } from './context/PlayerContext';
import { ResultProvider } from './context/ResultContext';

function App() {
  return (
    <>
      <ResultProvider>
        <PlayerProvider>
          <Main />
        </PlayerProvider> 
      </ResultProvider>
    </>
  );
}

export default App;
