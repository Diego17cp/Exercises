import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { User, UserId, UsersWithId } from "../../types";
import { default_State } from "../../mocks/initialState.ts";



// Define the initial state of the slice
const initialState: UsersWithId[] = (() => {
	// Get the state from the local storage
	const persistedState = localStorage.getItem("__redux__state__");
	// If the state exists, return it, otherwise return the default state
	if (persistedState) {
		return JSON.parse(persistedState).users;
	}
	// Return the default state if the state in local storage does not exist
	return default_State;
})();

// Create the slice
// The slice is an object that contains the reducer and the actions, it's a part of the Global State
// The slice is created with the createSlice function from Redux Toolkit
// The createSlice function receives an object with the name of the slice and the initial state
export const usersSlice = createSlice({
	name: "users",
	initialState,
	// The reducers are an object that contains all the actions of the slice
	// The actions are functions that receive the state and an action with a payload as parameters and return the new state
	// The payload is the data that is sent to the action
	reducers: {
		// Actions
		//  The addNewUser action receives the state and an action with a payload of type User as parameters
		// the state is the current state of the slice, DON'T PASS IT AS AN ARGUMENT IN THE ACTION FUNCTIONS
		// The action adds a new user to the state with a random id and then returns the new state with the new user
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
			// Redux Toolkit allows us mutate the state directly
			// state.push({ id, ...action.payload })
		},
		// The deleteUserById action receives the state and an action with a payload of type UserId as parameters
		// The action deletes a user from the state by the id and then returns the new state without the user
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		// The rollbackUser action receives the state and an action with a payload of type UsersWithId as parameters
		rollbackUser: (state, action: PayloadAction<UsersWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id
			);
			if (!isUserAlreadyDefined) {
				return [...state, action.payload];
			}
		},
		// The editUser action receives the state and an action with a payload of type UsersWithId as parameters
		editUser: (state, action: PayloadAction<UsersWithId>) => {
			// Get the user from the payload
			const user = action.payload
			// Find the index of the user in the state
			const index = state.findIndex((u) => u.id === user.id)
			// If the user is found, update the user in the state
			if (index !== -1) {
				state[index] = user
			}
		}
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser, editUser } = usersSlice.actions;
export type Actions = typeof usersSlice.actions;