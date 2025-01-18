import React from "react";
import { FILTER_BUTTONS, Filter } from "../consts";

interface Props {
	filterSelected: Filter;
	onFilterChange: (
		filter: Filter
	) => void;
}

export const Filters: React.FC<Props> = ({
	filterSelected,
	onFilterChange,
}) => {
	return (
		<ul className="filters">
			{Object.entries(FILTER_BUTTONS).map(([key, { label, href }]) => {
				const isSelected = key === filterSelected;
				const className = isSelected ? "selected" : "";
				return (
					<li key={key}>
						<a
							href={href}
							className={className}
							onClick={(event) => {
								event.preventDefault();
								onFilterChange(
									key as Filter
								);
							}}
						>
							{label}
						</a>
					</li>
				);
			})}
		</ul>
	);
};
