import React, { useEffect, useRef, useState } from "react";
import { TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
	onRemoveTodo: ({ id }: TodoId) => void;
	onToggleCompleted: ({
		id,
		completed,
	}: Pick<TodoType, "id" | "completed">) => void;
	setTitle: ({ id, title }: Pick<TodoType, "id" | "title">) => void;
	setIsEditing: (id: string) => void;
	isEditing: string;
}

export const Todo: React.FC<Props> = ({
	id,
	title,
	completed,
	onRemoveTodo,
	onToggleCompleted,
	setTitle,
	setIsEditing,
	isEditing,
}) => {
	const [editedTitle, setEditedTitle] = useState(title);
	const inputEditTitle = useRef<HTMLInputElement>(null);

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
		event
	) => {
		if (event.key === "Enter") {
			setEditedTitle(editedTitle.trim());
			if (editedTitle !== title) {
				setTitle({ id, title: editedTitle });
			}
			if (editedTitle === "") {
				onRemoveTodo({ id });
			}
			setIsEditing("");
		}
		if (event.key === "Escape") {
			setEditedTitle(title);
			setIsEditing("");
		}
	};

	useEffect(() => {
		inputEditTitle.current?.focus();
	}, [isEditing]);

	return (
		<>
			<div className="view">
				<input
					type="checkbox"
					className="toggle"
					checked={completed}
					onChange={(event) => {
						onToggleCompleted({
							id,
							completed: event.target.checked,
						});
					}}
				/>
				<label>{title}</label>
				<button
					className="destroy"
					onClick={() => {
						onRemoveTodo({ id });
					}}
				></button>
			</div>

			<input
				className="edit"
				value={editedTitle}
				onChange={(event) => setEditedTitle(event.target.value)}
				onKeyDown={handleKeyDown}
				ref={inputEditTitle}
				onBlur={() => {
					setIsEditing("");
				}}
			/>
		</>
	);
};
