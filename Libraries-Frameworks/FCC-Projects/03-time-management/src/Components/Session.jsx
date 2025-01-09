import PropTypes from 'prop-types';

export const Session = ({ initialMinutesSession, handleDecrement, handleIncrement }) => {
    
    return (
        <div className="length-control">
            <span className="session-label label">
                Session Length
            </span>
            <div className="controls session-controls">
                <button id="session-increment" onClick={handleIncrement}>
                    <i className="fa fa-arrow-up"></i>
                </button> 
                <span id="session-length" className='length'>{ initialMinutesSession }</span>
                <button id="session-decrement" onClick={handleDecrement}>
                    <i className="fa fa-arrow-down"></i>
                </button>
            </div>
        </div>
    )
}

Session.propTypes = {
    initialMinutesSession: PropTypes.number.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleIncrement: PropTypes.func.isRequired
}