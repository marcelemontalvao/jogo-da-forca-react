import alphabet from "../../alphabet";

export default function Shot({disabledInput, setDisabledInput, setDisabledLyric, shot, setShot,randomWord, setColorWord, setWordGame, setAmountErrorsGame}) {


    const handleEndGame = () => {
        setDisabledInput(true);
        setDisabledLyric(alphabet)
        setWordGame(randomWord)
    }

    const guessWord = () => {
        let initialWordGame = ""
        randomWord.forEach(lyric => {
            initialWordGame += lyric;            
        });
        
        if(shot === initialWordGame) {
            setColorWord("green")
        } else {
            setColorWord("red")
            setAmountErrorsGame(6)
        }
        handleEndGame()
    }

    return (
        <div className="container-shot">
            <span>Já sei a palavra!</span>
            <input data-test="guess-input" placeholder="Digite seu chute aqui!" disabled={disabledInput} value={shot} onChange={event => {
                setShot(event.target.value)
            }}></input>
            <button data-test="guess-button" onClick={guessWord}>Chutar</button>
        </div>
    )
} 