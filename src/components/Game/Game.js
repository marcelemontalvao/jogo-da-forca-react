import initialImg from "../../assets/forca0.png"
import oneError from "../../assets/forca1.png"
import twoErrors from "../../assets/forca2.png"
import threeErrors from "../../assets/forca3.png"
import fourErrors from "../../assets/forca4.png"
import fiveErrors from "../../assets/forca5.png"
import loseGame from "../../assets/forca6.png"
import "../../css/styles.css"
import palavras from "../../palavras"

export default function Game({setDisabledInput, setDisabledLyric, amountErrorsGame, setAmountErrorsGame, setRandomWord, wordGame, setWordGame}) {

    const playGame = () => {
        setDisabledInput(false)
        setDisabledLyric([])
        setAmountErrorsGame(0)
        randomWord()
    }

    const renderImg = (amountErrorsGame) => {
        switch(amountErrorsGame) {
            case 0:
                return initialImg;
            case 1:
                return oneError;
            case 2:
                return twoErrors;
            case 3:
                return threeErrors;
            case 4:
                return fourErrors;
            case 5:
                return fiveErrors;
            case 6:
                return loseGame;
            default: 
                break;
        }
    }

    function randomWord() {
        const wordIndex = Math.floor(Math.random() * palavras.length)
        const word = palavras[wordIndex]
        let array = []
        let arrayTraits = []
        for (let i = 0; i < word.length; i++) {
            const element = word[i];
            array.push(element);
        }
        array.forEach(() => {
            arrayTraits.push("_ ")
        })
        setRandomWord(array)
        setWordGame(arrayTraits)
    }


    return (
        <div className="container">
            <img src={renderImg(amountErrorsGame)} alt="Forca Inicial" />
            <div className="container-btn-word">
                <button onClick={playGame}>Escolher palavra</button>
                <span>{wordGame}</span>
            </div>
        </div>
    )
}