import alphabet from "../../alphabet"

export default function Lyrics({disabledLyric}) {

    return (
        <section className="container-lyrics">
            {alphabet.map(lyric => (
                <button className="lyric" 
                disabled={disabledLyric.includes(lyric)}>
                    {lyric}
                    </button>
            ))}
        </section>
    )
}