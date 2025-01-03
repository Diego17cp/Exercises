import PropTypes from "prop-types";
import { Square } from "./Square";

export const Board = ({ board, updateBoard }) => {
	return (
		<section className="game">
			{board.map((square, index) => {
				return (
					<Square key={index} index={index} updateBoard={updateBoard}>
						{square}
					</Square>
				);
			})}
		</section>
	);
};

Board.propTypes = {
	board: PropTypes.arrayOf(PropTypes.string).isRequired,
	updateBoard: PropTypes.func.isRequired,
};
