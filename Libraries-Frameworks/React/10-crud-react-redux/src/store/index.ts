import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser, UsersWithId } from "./users/slice";
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem(
			"__redux__state__",
			JSON.stringify(store.getState())
		);
	};
const syncDB: Middleware = (store) => (next) => (action) => {
	const { type, payload } = action;
	const prevState = store.getState();
	
	next(action);
	if (type === "users/deleteUserById") {
		const userIdToRemove = payload;
		const userToRemove = prevState.users.find((user: UsersWithId) => user.id === userIdToRemove);
		fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
			method: "DELETE",
		})
			.then((response) => {
				if (response.ok) toast.success("User deleted successfully");
			})
			.catch((err) => {
				if (userToRemove) {
					store.dispatch(rollbackUser(userToRemove));
				}
				toast.error("Error deleting user");
				console.error("Error deleting user" + err);
			});
	}
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, syncDB),
});

// ReturnType is a utility type that extracts the return type of a function type
// Obtain the type from the store state and assign it to the RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
