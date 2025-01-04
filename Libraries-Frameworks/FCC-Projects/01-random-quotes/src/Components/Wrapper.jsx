import PropTypes from "prop-types";
import { QuoteBox } from "./QuoteBox";
import "./Wrapper.css";

export const Wrapper = ({ changeQuote, color, quote, author, opacity }) => {
	return (
		<div className="wrapper">
			<QuoteBox
				changeQuote={changeQuote}
				color={color}
				quote={quote}
				author={author}
                opacity={opacity}
			/>
			<div className="footer">
				<p>
					By: <a href="https://github.com/Diego17cp" target="_blank">Diego17</a>
				</p>
			</div>
		</div>
	);
};

Wrapper.propTypes = {
	changeQuote: PropTypes.func.isRequired,
	color: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
    opacity: PropTypes.number.isRequired,
};
