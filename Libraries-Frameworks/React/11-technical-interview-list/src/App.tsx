import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { SortBy, type User } from "./types.d";
import { UserList } from "./components/UserList";

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [showColors, setShowColors] = useState(false);
	const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
	const originalUsers = useRef<User[]>([]);
	const [filterCountry, setFilterCountry] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const toggleColors = () => {
		setShowColors(!showColors);
	};
	const toggleSortByCountry = () => {
		const newSortVal =
			sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
		setSorting(newSortVal);
	};
	const handleDelete = (uuid: string) => {
		const filteredUsers = users.filter((user) => user.login.uuid !== uuid);
		setUsers(filteredUsers);
	};
	const handleReset = () => {
		setUsers(originalUsers.current);
	};
	const handleChangeSort = (sort: SortBy) => {
		setSorting(sort);
	};

	useEffect(() => {
		setLoading(true);
		setError(false);
		fetch("https://randomuser.me/api?results=10")
			.then(async (response) => {
				if (!response.ok) {
					throw new Error("Error fetching users");
				}
				return await response.json()
			})
			.then((data) => {
				setUsers(data.results);
				originalUsers.current = data.results;
			})
			.catch((error) => { 
				setError(error)
				console.error(error)
			})
			.finally(() => setLoading(false));
	}, []);

	const filteredUsers = useMemo(() => {
		return typeof filterCountry === "string" && filterCountry.length > 0
			? users.filter((user) =>
					user.location.country
						.toLowerCase()
						.includes(filterCountry.toLowerCase())
			  )
			: users;
	}, [users, filterCountry]);

	const sortedUsersByCountry = useMemo(() => {
		if (sorting === SortBy.COUNTRY)
			return filteredUsers.toSorted((a, b) =>
				a.location.country.localeCompare(b.location.country)
			);
		if (sorting === SortBy.NONE) return filteredUsers;
		if (sorting === SortBy.NAME)
			return filteredUsers.toSorted((a, b) =>
				a.name.first.localeCompare(b.name.first)
			);
		if (sorting === SortBy.LAST)
			return filteredUsers.toSorted((a, b) =>
				a.name.last.localeCompare(b.name.last)
			);
		return filteredUsers;
	}, [filteredUsers, sorting]);

	return (
		<>
			<h1>Users List</h1>
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
				{loading && <p>Loading...</p>}
				{!loading && error && <p>Error loading users</p>}
				{!loading && !error && users.length === 0 && (
					<p>There aren't users to show</p>
				)}
				{!loading && !error && users.length > 0 && (
					<UserList
						showColors={showColors}
						users={sortedUsersByCountry}
						handleDelete={handleDelete}
						changeSort={handleChangeSort}
					/>
				)}
			</main>
		</>
	);
}

export default App;
