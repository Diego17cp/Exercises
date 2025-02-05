import { useMemo, useState } from "react";
import "./App.css";
import { SortBy, type User } from "./types.d";
import { UserList } from "./components/UserList";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
	const response = await fetch(
		`https://randomuser.me/api?results=10&seed=dialca&page=${pageParam}`
	);
	const data = await response.json();
	if (!response.ok) {
		throw new Error("Error fetching users");
	}
	const currentPage = Number(data.info.page);
	const nextPage = currentPage > 10 ? undefined : currentPage + 1;
	return {
		users: data.results,
		nextPage,
	};
};

function App() {
	const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: ["users"],
			queryFn: fetchUsers,
			getNextPageParam: (lastPage) => lastPage.nextPage,
			initialPageParam: 1,
		});
	// flatMap method makes a new array with the results of calling a provided function on every element in the array
	const users: User[] = data?.pages?.flatMap((page) => page.users) ?? [];

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
