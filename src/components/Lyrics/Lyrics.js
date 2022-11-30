import alphabet from "../../alphabet"

export default function Lyrics({disabledLyric, setDisabledLyric, randomWord, setRandomWord, wordGame,setWordGame, amountErrorsGame, setAmountErrorsGame, setColorWord, setDisabledInput}) {

    const clickLetter = (letterClicked) => {
        setDisabledLyric([...disabledLyric, letterClicked])
        randomWord.includes(letterClicked) ? hitLyric(letterClicked) : doNotHitLyric(letterClicked)
    }
    
    const hitLyric = (letterClicked) => {
        const newWordGame = [...wordGame]

        randomWord.forEach((hitLetter, i) => {
            if(randomWord[i] === letterClicked) {
                newWordGame[i] = hitLetter
            }  
        });

        setWordGame(newWordGame)
        if(!newWordGame.includes("_ ")) {
            setColorWord("green")
            setWordGame(randomWord)
            handleEndGame()
        }
    }

    const doNotHitLyric = (letterClicked) => {
        const newAmountErrors = amountErrorsGame + 1
        setAmountErrorsGame(newAmountErrors)
        if(newAmountErrors == 6) {
            setColorWord("red")
            handleEndGame();
            setWordGame(randomWord)
        }
    }

    const handleEndGame = () => {
        setDisabledInput(true);
        setDisabledLyric(alphabet)
    }

    return (
        <section className="container-lyrics">
            {alphabet.map(lyric => (
                <button onClick={()=> clickLetter(lyric)} className="lyric" 
                disabled={disabledLyric.includes(lyric)}>
                    {lyric}
                    </button>
            ))}
        </section>
    )
}