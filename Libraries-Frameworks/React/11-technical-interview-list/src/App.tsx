import { useMemo, useState } from "react";
import "./App.css";
import { SortBy } from "./types.d";
import { UserList } from "./components/UserList";
import { useUsers } from "./hooks/useUsers";
import { Results } from "./components/Results";
import { useQueryClient } from "@tanstack/react-query";

function App() {
	// flatMap method makes a new array with the results of calling a provided function on every element in the array
	const { isLoading, isError, users, refetch, fetchNextPage, hasNextPage } =
		useUsers();
	const queryClient = useQueryClient();

	const [showColors, setShowColors] = useState(false);
	const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
	const [filterCountry, setFilterCountry] = useState<string | null>(null);

	const toggleColors = () => {
		setShowColors(!showColors);
	};
	const toggleSortByCountry = () => {
		const newSortVal =
			sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
		setSorting(newSortVal);
	};
	const handleDelete = (uuid: string) => {
		queryClient.setQueryData(["users"], (oldData: any) => ({
			pages: oldData.pages.map((page) => ({
				...page,
				users: page.users.filter(
					(user) => user.login.uuid !== uuid
				),
			})),
			pageParams: oldData.pageParams,
		}));
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
			<Results />
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
				{!isLoading &&
					!isError &&
					hasNextPage &&
					users.length !== 0 && (
						<button
							onClick={() => {
								fetchNextPage();
							}}
						>
							Charge more users
						</button>
					)}
				{!isLoading && !isError && !hasNextPage && (
					<p>No more users found</p>
				)}
			</main>
		</>
	);
}

export default App;
