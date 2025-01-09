import PropTypes from 'prop-types'

export const Break = ({ initialMinutesBreak, handleIncrement, handleDecrement }) => {
    // const { minutesBreak, handleDecrement, handleIncrement } = useBreak()
    return (
        <div className="length-control">
            <span className="break-label label">
                Break Length
            </span>
            <div className="controls break-controls">
                <button id="break-increment" onClick={handleIncrement}>
                    <i className="fa fa-arrow-up"></i>
                </button>
                <span id="break-length" className='length'>{ initialMinutesBreak }</span>
                <button id="break-decrement" onClick={handleDecrement}>
                    <i className="fa fa-arrow-down"></i>
                </button>
            </div>
        </div>
    )
}

Break.propTypes = {
    initialMinutesBreak: PropTypes.number.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleIncrement: PropTypes.func.isRequired
}