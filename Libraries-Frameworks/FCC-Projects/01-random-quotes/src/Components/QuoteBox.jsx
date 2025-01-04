import PropTypes from "prop-types";
import { Buttons } from "./Buttons";

export const QuoteBox = ({ changeQuote, color, quote, author, opacity }) => {
	return (
		<div className="quote-box">
			<div className="quote-text" style={{ color: color}}>
				<i className="fa fa-quote-left" style={{opacity: opacity}}></i>
				<span className="text" style={{opacity: opacity}}>{quote}</span>
			</div>
			<div className="quote-author" style={{ color: color }}>
				<p className="author" style={{opacity:opacity}}>{author}</p>
			</div>
			<Buttons
				changeQuote={changeQuote}
				color={color}
				quote={quote}
				author={author}
			/>
		</div>
	);
};

QuoteBox.propTypes = {
	changeQuote: PropTypes.func.isRequired,
	color: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
    opacity: PropTypes.number.isRequired,
};
