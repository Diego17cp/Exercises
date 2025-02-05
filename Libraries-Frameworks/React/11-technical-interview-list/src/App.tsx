import { useMemo, useState } from "react";
import "./App.css";
import { SortBy, type User } from "./types.d";
import { UserList } from "./components/UserList";
import { useQuery } from "@tanstack/react-query";


const fetchUsers = async (page: number) => {
	const response = await fetch(
		`https://randomuser.me/api?results=10&seed=dialca&page=${page}`
	);
	const data = await response.json();
	if (!response.ok) {
		throw new Error("Error fetching users");
	}
	return data.results;
}

function App() {
	const { isLoading, isError, data: users = [], refetch } = useQuery<User[]>({
		queryKey: ['users'],
		queryFn: async () => await fetchUsers(1),
	})
	const [showColors, setShowColors] = useState(false);
	const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
	const [filterCountry, setFilterCountry] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);

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
		// setUsers(filteredUsers);
	};
	const handleReset = async () => {
		await refetch();
	};
	const handleChangeSort = (sort: SortBy) => {
		setSorting(sort);
	};

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
				{users.length > 0 && (
					<UserList
						showColors={showColors}
						users={sortedUsersByCountry}
						handleDelete={handleDelete}
						changeSort={handleChangeSort}
					/>
				)}
				{isLoading && <p>Loading...</p>}
				{!isLoading && isError && <p>Error loading users</p>}
				{!isLoading && !isError && users.length === 0 && (
					<p>There aren't users to show</p>
				)}
				{!isLoading && !isError && users.length!== 0 && (
					<button onClick={() => setCurrentPage(currentPage + 1)}>
						Charge more users
					</button>
				)}
			</main>
		</>
	);
}

export default App;
