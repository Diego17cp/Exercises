import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/users";
import {
	UserInfinityResponse,
	type User,
	type UserPageResponse,
} from "../types.d";

export const useUsers = () => {
	const {
		isLoading,
		isError,
		data,
		refetch,
		fetchNextPage,
		hasNextPage,
		isFetching,
	} = useInfiniteQuery<
		UserPageResponse,
		Error,
		UserInfinityResponse,
		["users"],
		number
	>({
		queryKey: ["users"],
		queryFn: ({ pageParam }) => fetchUsers(pageParam),
		getNextPageParam: (lastPage) => lastPage.nextPage,
		initialPageParam: 1,
		refetchOnWindowFocus: false,
	});
	const users = data?.pages.flatMap((page) => page.users) ?? [];
	return {
		isLoading: isLoading || isFetching,
		isError,
		users: users as User[],
		refetch,
		fetchNextPage,
		hasNextPage,
	};
};
