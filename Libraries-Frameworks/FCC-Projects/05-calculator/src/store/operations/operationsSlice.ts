import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type OperationsState = number;

const initialState: OperationsState = 0; 

export const operationsSlice = createSlice({
    name: 'operations',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<OperationsState>) => {
            return state + action.payload
        },
        subtract: (state, action: PayloadAction<OperationsState>) => {
            return state - action.payload
        },
        multiply: (state, action: PayloadAction<OperationsState>) => {
            return state * action.payload
        },
        divide: (state, action: PayloadAction<OperationsState>) => {
            return state / action.payload
        },
        clear: () => {
            return initialState
        }
    }
})

export default operationsSlice.reducer;

export const {
    add,
    subtract,
    multiply,
    divide,
    clear
} = operationsSlice.actions;