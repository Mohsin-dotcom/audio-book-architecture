import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AudioActions } from './redux/actions/audioActions';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: AudioActions.Types.GET_TRANSCRIBED_AUDIO,
      payload: {
        //audio to transcribe.
      }
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
