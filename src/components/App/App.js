import alphabet from '../../alphabet';
import Game from '../Game/Game';
import Lyrics from '../Lyrics/Lyrics';
import Shot from '../shot/Shot';
import "../../css/reset.css"
import "../../css/styles.css"
import { useState } from 'react';

function App() {
  const [disabledInput, setDisabledInput] = useState(true)
  const [disabledLyric, setDisabledLyric] = useState(alphabet)
  const [randomWord, setRandomWord] = useState([])
  const [wordGame, setWordGame] = useState([])
  const [shot, setShot] = useState("")
  const [amountErrorsGame, setAmountErrorsGame] = useState(0)
  const [colorWord, setColorWord] = useState("black")

  return (
    <div className="App">
      <Game setDisabledInput={setDisabledInput} setDisabledLyric={setDisabledLyric} amountErrorsGame={amountErrorsGame} setAmountErrorsGame={setAmountErrorsGame} setRandomWord={setRandomWord} wordGame={wordGame} setWordGame={setWordGame} colorWord={colorWord} setColorWord={setColorWord} setShot={setShot} />
      <Lyrics disabledLyric={disabledLyric} setDisabledLyric={setDisabledLyric} randomWord={randomWord} setRandomWord={setRandomWord} wordGame={wordGame} setWordGame={setWordGame}  amountErrorsGame={amountErrorsGame} setAmountErrorsGame={setAmountErrorsGame} setColorWord={setColorWord} setDisabledInput={setDisabledInput} />
      <Shot disabledInput={disabledInput} setDisabledInput={setDisabledInput} setDisabledLyric={setDisabledLyric} shot={shot} setShot={setShot} wordGame={wordGame} setWordGame={setWordGame} setColorWord={setColorWord} randomWord={randomWord} setRandomWord={setRandomWord} setAmountErrorsGame={setAmountErrorsGame} />
    </div>
  );
}

export default App;