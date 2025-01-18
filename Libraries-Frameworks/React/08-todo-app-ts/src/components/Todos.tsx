import React, { useState } from "react";
import { TodoId, type ListOfTodos, Todo as TodoType } from "../types";
import { Todo } from "./Todo";

interface Props {
	todos: ListOfTodos;
	onRemoveTodo: ({ id }: TodoId) => void;
	onToggleCompleted: ({
		id,
		completed,
	}: Pick<TodoType, "id" | "completed">) => void;
	setTitle: ({ id, title }: Pick<TodoType, "id" | "title">) => void;
}

export const Todos: React.FC<Props> = ({
	todos,
	onRemoveTodo,
	onToggleCompleted,
	setTitle,
}) => {
	const [isEditing, setIsEditing] = useState("");

	return (
		<ul className="todo-list">
			{todos.map((todo) => (
				<li
					key={todo.id}
					onDoubleClick={() => {
						setIsEditing(todo.id);
					}}
					className={`
						${todo.completed ? "completed" : ""}
						${isEditing === todo.id ? "editing" : ""}
					`}
				>
					<Todo
						key={todo.id}
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						onRemoveTodo={onRemoveTodo}
						onToggleCompleted={onToggleCompleted}
						setTitle={setTitle}
						setIsEditing={setIsEditing}
						isEditing={isEditing}
					/>
				</li>
			))}
		</ul>
	);
};
