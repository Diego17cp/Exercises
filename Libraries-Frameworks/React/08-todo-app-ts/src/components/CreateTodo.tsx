import React, { useState } from "react";
import { TodoTitle } from "../types";

interface Props {
	saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		saveTodo({ title: inputValue });
		setInputValue("");
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="new-todo"
				value={inputValue}
				onChange={handleChange}
				placeholder="What do you want to do?"
			/>
		</form>
	);
};
