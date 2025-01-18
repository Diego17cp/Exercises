import React from "react";
import { Todos } from "./components/Todos";
import { Header } from "./components/Header";
import { Copyright } from "./components/Copyright";
import { Footer } from "./components/Footer";
import { useTodos } from "./hooks/useTodos";

function App(): JSX.Element {
	const {
		filterSelected,
		activeCounts,
		completedCounts,
		filteredTodos,
		handleRemove,
		handleCompleted,
		handleFilterChange,
		handleRemoveCompleteds,
		handleAddTodo,
		handleUpdateTitle,
	} = useTodos();

	return (
		<>
			<div className="todoapp">
				<Header onAddTodo={handleAddTodo} />
				<Todos
					todos={filteredTodos}
					onRemoveTodo={handleRemove}
					onToggleCompleted={handleCompleted}
					setTitle={handleUpdateTitle}
				/>
				<Footer
					activeCount={activeCounts}
					filterSelected={filterSelected}
					handleFilterChange={handleFilterChange}
					completedCount={completedCounts}
					onClearCompleted={handleRemoveCompleteds}
				/>
			</div>
			<Copyright />
		</>
	);
}

export default App;
