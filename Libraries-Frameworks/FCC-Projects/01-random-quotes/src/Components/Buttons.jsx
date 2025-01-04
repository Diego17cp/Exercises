import PropTypes from "prop-types";

export const Buttons = ({ changeQuote, color, quote, author }) => {
	const tweetText = encodeURIComponent(`"${quote}" - ${author}`);
	const href = `https://twitter.com/intent/tweet?text=${tweetText}`;
	return (
		<div className="buttons-container">
			<a
				href={href}
				className="tweet-quote"
				title="Tweet this quote!"
				style={{ backgroundColor: color }}
				target="_blank"
				rel="noreferrer"
			>
				<i className="fa-brands fa-twitter"></i>
			</a>
			<button
				className="new-quote"
				onClick={changeQuote}
				style={{ backgroundColor: color }}
			>
				New Quote
			</button>
		</div>
	);
};

Buttons.propTypes = {
	changeQuote: PropTypes.func.isRequired,
	color: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};
