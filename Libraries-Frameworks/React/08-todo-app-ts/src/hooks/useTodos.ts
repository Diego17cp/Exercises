import { useState } from "react";
import { Filter, TODO_FILTERS } from "../consts";
import { TodoId, TodoTitle, Todo as TodoType } from "../types";
import { mockToDos } from "../mocks/todos";

export const useTodos = () => {
    const [todos, setTodos] = useState(mockToDos);
	const [filterSelected, setFilterSelected] = useState<Filter>(
		TODO_FILTERS.ALL
	);

	const handleRemove = ({ id }: TodoId) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const handleCompleted = ({
		id,
		completed,
	}: Pick<TodoType, "id" | "completed">) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const handleFilterChange = (filter: Filter) => {
		setFilterSelected(filter);
	};

	const activeCounts = todos.filter((todo) => !todo.completed).length;
	const completedCounts = todos.length - activeCounts;

	const filteredTodos = todos.filter((todo) => {
		if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
		if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
		return todos;
	});

	const handleRemoveCompleteds = () => {
		const newTodos = todos.filter((todo) => !todo.completed);
		setTodos(newTodos);
	};

	const handleAddTodo = ({ title }: TodoTitle) => {
		const newTodo = {
			title,
			id: crypto.randomUUID(),
			completed: false,
		};
		const newTodos = [...todos, newTodo];
		setTodos(newTodos);
	};

	const handleUpdateTitle = ({
		id,
		title,
	}: Pick<TodoType, "id" | "title">) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					title,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

    return {
        todos,
        filterSelected,
        activeCounts,
        completedCounts,
        filteredTodos,
        handleRemove,
        handleCompleted,
        handleFilterChange,
        handleRemoveCompleteds,
        handleAddTodo,
        handleUpdateTitle
    }
}