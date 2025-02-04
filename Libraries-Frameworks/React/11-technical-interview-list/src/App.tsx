import { useEffect, useRef, useState } from "react";
import "./App.css";
import { type User } from "./types";
import { UserList } from "./components/UserList";

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [showColors, setShowColors] = useState(false);
	const [sortByCountry, setSortByCountry] = useState(false);
	const originalUsers = useRef<User[]>([]);
	const [filterCountry, setFilterCountry] = useState<string | null>(null);

	const toggleColors = () => {
		setShowColors(!showColors);
	};
	const toggleSortByCountry = () => {
		setSortByCountry(!sortByCountry);
	};
	const handleDelete = (uuid: string) => {
		const filteredUsers = users.filter((user) => user.login.uuid !== uuid);
		setUsers(filteredUsers);
	};
	const handleReset = () => {
		setUsers(originalUsers.current);
	};

	useEffect(() => {
		fetch("https://randomuser.me/api?results=100")
			.then(async (response) => await response.json())
			.then((data) => {
				setUsers(data.results);
				originalUsers.current = data.results;
			})
			.catch((error) => console.error(error));
	}, []);

  const filteredUsers = typeof filterCountry === 'string' && filterCountry.length > 0
  ? users.filter((user) => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
  : users;

	const sortedUsersByCountry = sortByCountry
		? filteredUsers.toSorted((a, b) => {
				return a.location.country.localeCompare(b.location.country);
		  })
		: filteredUsers;

	return (
		<>
			<h1>Hola ts</h1>
			<header>
				<button onClick={toggleColors}>Color cells</button>
				<button onClick={toggleSortByCountry}>Sort by country</button>
				<button onClick={handleReset}>Reset Users list</button>
				<input
					type="text"
					placeholder="Filter by country..."
					onChange={(e) => setFilterCountry(e.target.value)}
				/>
			</header>
			<main>
				<UserList
					showColors={showColors}
					users={sortedUsersByCountry}
					handleDelete={handleDelete}
				/>
			</main>
		</>
	);
}

export default App;
