import { configureStore, type Middleware } from "@reduxjs/toolkit";
// Imports the reducer, action and type from the users slice
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
		const userToRemove = prevState.users.find(
			(user: UsersWithId) => user.id === userIdToRemove
		);
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

// The store is created with the configureStore function from Redux Toolkit
export const store = configureStore({
	// The reducer is an object that contains all the reducers of the application
	// In this case, there is only one reducer called users
	reducer: {
		// The key of the reducer is the name of the slice
		users: usersReducer,
		// Add more reducers here if it's necessary
	},
	// The middleware is an array of functions that can intercept actions before they reach the reducer
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			persistanceLocalStorageMiddleware,
			syncDB
		),
});

// ReturnType is a utility type that extracts the return type of a function type
// Obtain the type from the store state and assign it to the RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
