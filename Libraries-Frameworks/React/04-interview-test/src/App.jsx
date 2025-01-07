import { useCatImage } from "../hooks/useCatImage"
import { useCatFact } from "../hooks/useCatFact"

export const App = () => {
    const { fact, refreshFact } = useCatFact()
    const { imgUrl } = useCatImage({fact})
    

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main style={{display: 'flex', flexDirection: 'column', placeItems: 'center'}}>
            <h1>Cats Facts B)</h1>
            {fact && <p>{fact}</p>}
            {imgUrl && <img src={imgUrl} alt={`Image extracted from the first three words from ${fact}`} />}
            <button onClick={handleClick}>Get new fact</button>
        </main>
    )
}