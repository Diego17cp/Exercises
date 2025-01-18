import React, { useState } from "react";
import { Todos } from "./components/Todos";

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

	return (
		<div className="todoapp">
			<Todos todos={todos} />
		</div>
	);
}

export default App;
