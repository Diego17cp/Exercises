import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/users";
import { UserInfinityResponse, type User, type UserPageResponse } from "../types.d";

export const useUsers = () => {
	const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
		useInfiniteQuery<UserPageResponse, Error, UserInfinityResponse, ['users'], number>({
			queryKey: ["users"],
			queryFn: ({ pageParam }) => fetchUsers(pageParam),
			getNextPageParam: (lastPage) => lastPage.nextPage,
			initialPageParam: 1,
		});
    const users = data?.pages.flatMap((page) => page.users) ?? [];
	return {
		isLoading,
		isError,
		users: users as User[],
		refetch,
		fetchNextPage,
		hasNextPage,
	};
};
