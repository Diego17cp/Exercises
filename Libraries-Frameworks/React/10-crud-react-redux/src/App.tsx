import { Toaster } from "sonner";
import { ListOfUsers } from "./components/ListOfUsers";

function App() {
	// TODO: Implement the following:
	// - Edit a user
	// - Show toasts when a user is added, or edited
	// Validate cannot add a user with the same email or empty fields

	return (
		<main className="bg-zinc-900 flex flex-col w-full h-screen p-4 justify-center items-center relative">
			<ListOfUsers></ListOfUsers>
			<Toaster richColors></Toaster>
		</main>
	);
}

export default App;
