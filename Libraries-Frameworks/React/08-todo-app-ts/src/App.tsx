import React, { useState } from "react";
import { Todos } from "./components/Todos";
import { TodoId } from "./types";

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

  const handleRemove = ({ id } : TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

	return (
		<div className="todoapp">
			<Todos todos={todos} onRemoveTodo={handleRemove} />
		</div>
	);
}

export default App;
