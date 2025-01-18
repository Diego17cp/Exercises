import React from "react";
import { TodoTitle } from "../types";
import { CreateTodo } from "./CreateTodo";

interface Props {
	onAddTodo: ({ title }: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
	return (
		<header className="header">
			<h1>
				ToDo Project
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
					alt="Typescript logo"
					style={{
						width: "60px",
						height: "auto",
						marginLeft: "10px",
					}}
				/>
			</h1>

			<CreateTodo saveTodo={onAddTodo} />
		</header>
	);
};
