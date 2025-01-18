import React from "react";
import { Filters } from "./Filters";
import { Filter } from "../consts";

interface Props {
	activeCount: number;
	completedCount: number;
	onClearCompleted: () => void;
	filterSelected: Filter;
	handleFilterChange: (filter: Filter) => void;
}

export const Footer: React.FC<Props> = ({
	activeCount = 0,
	onClearCompleted,
	completedCount = 0,
	filterSelected,
	handleFilterChange,
}) => {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{activeCount}</strong> pending task(s)
			</span>

			<Filters
				filterSelected={filterSelected}
				onFilterChange={handleFilterChange}
			/>

			{completedCount > 0 && (
				<button className="clear-completed" onClick={onClearCompleted}>
					Clear completed
				</button>
			)}
		</footer>
	);
};
