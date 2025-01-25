import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type Operations = 'add' | 'subtract' | 'multiply' | 'divide' | null
interface OperationsState {
    currentVal: number,
    operation: Operations,
    previousVal: null | number
} 

const initialState: OperationsState={
    currentVal: 0,
    operation: null,
    previousVal: null
}; 

export const operationsSlice = createSlice({
    name: 'operations',
    initialState,
    reducers: {
        inputNumber: (state, action: PayloadAction<number>) => {
            state.currentVal = state.currentVal * 10 + action.payload
        },
        selectOperation: (state, action: PayloadAction<Operations>) => {
            state.previousVal = state.currentVal
            state.operation = action.payload
            state.currentVal = 0
        },
        calculate: (state) => {
            if(state.previousVal === null || state.operation === null) {
                state.currentVal = NaN
                return
            }
            switch(state.operation){
                case 'add':
                    state.currentVal = state.previousVal + state.currentVal
                    break
                case 'subtract':
                    state.currentVal = state.previousVal - state.currentVal
                    break
                case 'multiply':
                    state.currentVal = state.previousVal * state.currentVal
                    break
                case 'divide':
                    if(state.currentVal !== 0){
                        state.currentVal = state.previousVal / state.currentVal
                    } else{
                        state.currentVal = NaN
                    }
                    break
            }
            state.previousVal = null
            state.operation = null
        },
        clear: (state) => {
            state.currentVal = 0
            state.operation = null
            state.previousVal = null
        }
    }
})

export default operationsSlice.reducer;

export const {
    inputNumber, 
    selectOperation,
    calculate,
    clear
} = operationsSlice.actions;