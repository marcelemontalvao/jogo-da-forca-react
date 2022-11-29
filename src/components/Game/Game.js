import imgInicial from "../../assets/forca0.png"
import "../../css/styles.css"

export default function Game() {
    return (
        <div className="container">
            <img src={imgInicial} alt="Forca Inicial" />
            <div className="container-btn-word">
                <button>Escolher palavra</button>
                <span>_ _ _ _ _ _</span>
            </div>
        </div>
    )
}