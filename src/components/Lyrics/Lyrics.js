const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Lyrics() {
    return (
        <section className="container-lyrics">
            {alphabet.map((lyric) => <button className="lyric">{lyric}</button>)}
        </section>
    )
}