import PropTypes from 'prop-types';
import { Buttons } from "./Buttons"

export const QuoteBox = ({changeQuote, color, quote, author}) => {
    return (
        <div className='quote-box'>
            <div className='quote-text' style={{color: color}}>
                <i className="fa fa-quote-left"></i>
                <span className='text'>{quote}</span>
            </div>
            <div className='quote-author' style={{color: color}}>
                <p className='author'>{author}</p>
            </div>
            <Buttons changeQuote={changeQuote} color={color} />
        </div>
    )
}

QuoteBox.propTypes = {
    changeQuote: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}