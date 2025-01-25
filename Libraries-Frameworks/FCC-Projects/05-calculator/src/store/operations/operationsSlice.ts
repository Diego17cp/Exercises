import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type Operations = 'add' | 'subtract' | 'multiply' | 'divide' | null
interface OperationsState {
    currentVal: string,
    operation: Operations,
    previousVal: null | number
} 

const initialState: OperationsState={
    currentVal: "0",
    operation: null,
    previousVal: null
}; 

export const operationsSlice = createSlice({
    name: 'operations',
    initialState,
    reducers: {
        inputNumber: (state, action: PayloadAction<string>) => {
            if(action.payload === "."){
                if(state.currentVal.includes(".")) return
                if(state.currentVal === "0"){
                    state.currentVal = "0."
                    return
                }
                state.currentVal += "."
                return
            }
            if(state.currentVal==="0"){
                state.currentVal = action.payload
            } else{
                state.currentVal += action.payload
            }
        },
        selectOperation: (state, action: PayloadAction<Operations>) => {
            state.previousVal = parseFloat(state.currentVal)
            state.operation = action.payload
            state.currentVal = "0"
        },
        calculate: (state) => {
            if(state.previousVal === null || state.operation === null) {
                state.currentVal = "NaN"
                return
            }
            const currentVal = parseFloat(state.currentVal)
            switch(state.operation){
                case 'add':
                    state.currentVal = (state.previousVal + currentVal).toString()
                    break
                case 'subtract':
                    state.currentVal = (state.previousVal - currentVal).toString()
                    break
                case 'multiply':
                    state.currentVal = (state.previousVal * currentVal).toString()
                    break
                case 'divide':
                    if(state.currentVal !== "0"){
                        state.currentVal = (state.previousVal / currentVal).toString()
                    } else{
                        state.currentVal = "NaN"
                    }
                    break
            }
            state.previousVal = null
            state.operation = null
        },
        clear: (state) => {
            state.currentVal = "0"
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