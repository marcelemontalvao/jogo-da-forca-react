export default function Shot({disabledInput}) {
    return (
        <div className="container-shot">
            <span>Já sei a palavra!</span>
            <input placeholder="Digite seu chute aqui!" disabled={disabledInput}></input>
            <button>Chutar</button>
        </div>
    )
} 