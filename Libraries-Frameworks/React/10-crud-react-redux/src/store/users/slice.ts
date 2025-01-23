import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string
export interface User {
    name: string,
    email: string,
    github: string
}

export interface UsersWithId extends User {
    id: UserId
}

const default_State = [
	
	{
		id: "1",
		name: "Diego Castro",
		email: "diego@gmail.com",
		github: "diego17cp",
	},
	{
		id: "2",
		name: "Peter Parker",
		email: "peter@dailybugle.com",
		github: "spidey",
	},
	{
		id: "3",
		name: "Bruce Wayne",
		email: "bruce@wayne.com",
		github: "batman",
	},
	{
		id: "4",
		name: "Tony Stark",
		email: "tony@stark.com",
		github: "ironman",
	},
	{
		id: "5",
		name: "Clark Kent",
		email: "clark@dailyplanet.com",
		github: "superman",
	},
]

const initialState: UsersWithId[] = (
	() => {
		const persistedState = localStorage.getItem("__redux__state__")
		if(persistedState){
			return JSON.parse(persistedState).users
		}
		return default_State
	}
)()

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
		// Actions 
		addNewUser: (state, action : PayloadAction<User>) => {
			const id = crypto.randomUUID()
			return [...state, { id, ...action.payload }]
			// Redux Toolkit allows us mutate the state directly
			// state.push({ id, ...action.payload })
		},
		deleteUserById: (state, action : PayloadAction<UserId>) => {
			const id = action.payload
			return state.filter((user) => user.id !== id)
		},
		rollbackUser: (state, action : PayloadAction<UsersWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id
			)
			if (!isUserAlreadyDefined) {
				return [...state, action.payload]
			}
		}
    },
})

export default usersSlice.reducer

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions