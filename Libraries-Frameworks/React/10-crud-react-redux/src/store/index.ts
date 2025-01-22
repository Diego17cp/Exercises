import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

// ReturnType is a utility type that extracts the return type of a function type
// Obtain the type from the store state and assign it to the RootState type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch