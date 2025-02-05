import { User, type UserPageResponse } from "../types.d";

export const fetchUsers = async (pageParam: number) : Promise<UserPageResponse> => {
	const response = await fetch(
		`https://randomuser.me/api?results=10&seed=dialca&page=${pageParam}`
	);
	if (!response.ok) {
		throw new Error("Error fetching users");
	}
	const data = await response.json();
	const currentPage = Number(data.info.page);
	return {
		users: data.results as User[],
		nextPage : currentPage >= 10 ? undefined : currentPage + 1
	};
};