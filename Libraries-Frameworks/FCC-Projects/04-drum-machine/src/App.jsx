// import { useState } from 'react'
import { Pad } from "./components/Pad";
import { Controls } from "./components/Controls";
import "./App.css";
import { DrumMachineProvider } from "./context/drumMachine";

function App() {
	return (
		<DrumMachineProvider>
			<main className="app">
				<Pad />
				<Controls />
			</main>
		</DrumMachineProvider>
	);
}

export default App;
