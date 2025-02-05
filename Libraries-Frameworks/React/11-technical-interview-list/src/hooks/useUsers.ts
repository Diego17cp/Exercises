import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/users";

export const useUsers = () => {
	const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: ["users"],
			queryFn: fetchUsers,
			getNextPageParam: (lastPage) => lastPage.nextPage,
			initialPageParam: 1,
		});
    return {
        isLoading,
        isError,
        users: data?.pages?.flatMap((page) => page.users) ?? [],
        refetch,
        fetchNextPage,
        hasNextPage
    }
};
