import PropTypes from "prop-types";
import { Square } from "./Square";
import { turns } from "../constants";

export const Turns = ({ turn }) => {
	return (
		<section className="turn">
			<Square isSelected={turn === turns.X}>{turns.X}</Square>
			<Square isSelected={turn === turns.O}>{turns.O}</Square>
		</section>
	);
};

Turns.propTypes = {
	turn: PropTypes.string.isRequired,
};
