import PropTypes from 'prop-types';
import { QuoteBox } from "./QuoteBox";
import "./Wrapper.css";

export const Wrapper = ({changeQuote, color, quote, author}) => {
    return (
        <div className="wrapper">
            <QuoteBox changeQuote={changeQuote} color={color} quote={quote} author={author} />
            <div className='footer'>
                <p>By: <a href="https://github.com/Diego17cp">Diego17</a></p>
            </div>
        </div>
    )
}

Wrapper.propTypes = {
    changeQuote: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}