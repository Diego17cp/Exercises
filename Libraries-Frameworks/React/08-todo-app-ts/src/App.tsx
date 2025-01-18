import React, { useState } from "react";
import { Todos } from "./components/Todos";
import { TodoId, Todo as TodoType } from "./types";
import { Filter, TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";

const mockToDos = [
	{
		id: "1",
		title: "Learn React",
		completed: true,
	},
	{
		id: "2",
		title: "Learn TypeScript",
		completed: false,
	},
	{
		id: "3",
		title: "Learn Redux",
		completed: false,
	},
];

function App(): JSX.Element {
	const [todos, setTodos] = useState(mockToDos);
	const [filterSelected, setFilterSelected] = useState<Filter>(TODO_FILTERS.ALL);

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
    return todos
  })

	return (
		<div className="todoapp">
			<Todos
				todos={filteredTodos}
				onRemoveTodo={handleRemove}
				onToggleCompleted={handleCompleted}
			/>
			<Footer
				activeCount={activeCounts}
				filterSelected={filterSelected}
				handleFilterChange={handleFilterChange}
				completedCount={completedCounts}
        onClearCompleted={() => {}}
			/>
		</div>
	);
}

export default App;
