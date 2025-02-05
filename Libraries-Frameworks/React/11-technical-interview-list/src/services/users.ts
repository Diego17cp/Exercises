export const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
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