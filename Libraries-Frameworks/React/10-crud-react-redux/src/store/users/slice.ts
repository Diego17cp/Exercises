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

const initialState: UsersWithId[] = [
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

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
		// Actions 
		deleteUserById: (state, action : PayloadAction<UserId>) => {
			const id = action.payload
			return state.filter((user) => user.id !== id)
		}
    }
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions