import palavras from '../../palavras';
import alphabet from '../../alphabet';
import Game from '../Game/Game';
import Lyrics from '../Lyrics/Lyrics';
import Shot from '../shot/Shot';
import "../../css/reset.css"
import { useState } from 'react';
import initialImg from "../../assets/forca0.png"

function App() {
  const [disabledInput, setDisabledInput] = useState(true)
  const [disabledLyric, setDisabledLyric] = useState(alphabet)
  const [amountErrorsGame, setAmountErrorsGame] = useState(0)
  const [randomWord, setRandomWord] = useState([])
  const [wordGame, setWordGame] = useState([])

  return (
    <div className="App">
      <Game setDisabledInput={setDisabledInput} setDisabledLyric={setDisabledLyric} amountErrorsGame={amountErrorsGame} setAmountErrorsGame={setAmountErrorsGame} setRandomWord={setRandomWord} wordGame={wordGame} setWordGame={setWordGame} />
      <Lyrics disabledLyric={disabledLyric} />
      <Shot disabledInput={disabledInput} />
    </div>
  );
}

export default App;
