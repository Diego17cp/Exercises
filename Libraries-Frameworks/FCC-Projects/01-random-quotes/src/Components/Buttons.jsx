import PropTypes from 'prop-types';

export const Buttons = ({changeQuote, color}) => {
    return (
        <div className="buttons-container">
            <a href="https://x.com/intent/post" className="tweet-quote" title="Tweet this quote!" style={{backgroundColor: color}}>
                <i className="fa-brands fa-twitter"></i>
            </a>
            <button className='new-quote' onClick={changeQuote} style={{backgroundColor: color}}>New Quote</button>
        </div>
    )
}

Buttons.propTypes = {
    changeQuote: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
}