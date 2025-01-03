import { Square } from "./Square"
import PropTypes from 'prop-types'

export const WinnerModal = ({resetGame, winner}) => {
    if(winner===null) return null
    return (
        <section className='winner'>
            <div className="text">
                <h2>
                {
                    winner===false ? 'Empate' : `Ganó:`
                }
                </h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Jugar otra vez</button>
                </footer>
            </div>
        </section>
    )
}

WinnerModal.propTypes={
    resetGame: PropTypes.func.isRequired,
    winner: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}