import { Toaster } from "sonner";
import { ListOfUsers } from "./components/ListOfUsers";

function App() {
	return (
		<main className="bg-zinc-900 flex flex-col w-full h-screen p-4 justify-center items-center relative">
			<ListOfUsers></ListOfUsers>
			<Toaster richColors></Toaster>
		</main>
	);
}

export default App;
