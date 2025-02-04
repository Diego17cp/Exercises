import { useEffect, useState } from "react";
import "./App.css";
import { type User } from "./types";
import { UserList } from "./components/UserList";

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [showColors, setShowColors] = useState(false);
	const [sortByCountry, setSortByCountry] = useState(false);

	const toggleColors = () => {
		setShowColors(!showColors);
	};
	const toggleSortByCountry = () => {
		setSortByCountry(!sortByCountry);
	};

	useEffect(() => {
		fetch("https://randomuser.me/api?results=100")
			.then(async (response) => await response.json())
			.then((data) => setUsers(data.results))
			.catch((error) => console.error(error));
	}, []);

	const sortedUsersByCountry = sortByCountry
		? users.toSorted((a, b) => {
				return a.location.country.localeCompare(b.location.country);
		  })
		: users;

	return (
		<>
			<h1>Hola ts</h1>
			<header>
				<button onClick={toggleColors}>Color cells</button>
				<button onClick={toggleSortByCountry}>Sort by country</button>
			</header>
			<main>
				<UserList showColors={showColors} users={sortedUsersByCountry} />
			</main>
		</>
	);
}

export default App;
