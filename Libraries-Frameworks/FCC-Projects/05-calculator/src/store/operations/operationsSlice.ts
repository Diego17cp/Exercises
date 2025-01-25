import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Operations = "add" | "subtract" | "multiply" | "divide" | null;
interface OperationsState {
	currentVal: string;
	operation: Operations;
	previousVal: null | number;
	operationDisplay: string;
}

const initialState: OperationsState = {
	currentVal: "0",
	operation: null,
	previousVal: null,
	operationDisplay: "",
};

export const operationsSlice = createSlice({
	name: "operations",
	initialState,
	reducers: {
		inputNumber: (state, action: PayloadAction<string>) => {
			if (action.payload === ".") {
				if (state.currentVal.includes(".")) return;
				if (state.currentVal === "0") {
					state.currentVal = "0.";
					state.operationDisplay = state.currentVal;
					return;
				}
				state.currentVal += ".";
				state.operationDisplay = state.currentVal;
				return;
			}
			if (state.currentVal === "0") {
				state.currentVal = action.payload;
				state.operationDisplay = state.currentVal;
			} else {
				state.currentVal += action.payload;
				state.operationDisplay = state.currentVal;
			}
		},
		selectOperation: (state, action: PayloadAction<Operations>) => {
			state.previousVal = parseFloat(state.currentVal);
			state.operation = action.payload;
			state.operationDisplay = `${state.currentVal} ${
				action.payload === "add"
					? "+"
					: action.payload === "subtract"
					? "-"
					: action.payload === "multiply"
					? "*"
					: "/"
			}`;
			state.currentVal = "0";
		},
		calculate: (state) => {
			if (state.operation === null) {
				state.operationDisplay = `${state.currentVal} = ${state.currentVal}`;
				return;
			}
			if (state.previousVal === null) {
				state.currentVal = "NaN";
				state.operationDisplay = "NaN";
				return;
			}
			const currentVal = parseFloat(state.currentVal);
			switch (state.operation) {
				case "add":
					state.currentVal = (
						state.previousVal + currentVal
					).toString();
					state.operationDisplay = `${state.previousVal} + ${currentVal} = ${state.currentVal}`;
					break;
				case "subtract":
					state.currentVal = (
						state.previousVal - currentVal
					).toString();
					state.operationDisplay = `${state.previousVal} - ${currentVal} = ${state.currentVal}`;
					break;
				case "multiply":
					state.currentVal = (
						state.previousVal * currentVal
					).toString();
					state.operationDisplay = `${state.previousVal} * ${currentVal} = ${state.currentVal}`;
					break;
				case "divide":
					if (currentVal !== 0) {
						state.currentVal = (
							state.previousVal / currentVal
						).toString();
						state.operationDisplay = `${state.previousVal} / ${currentVal} = ${state.currentVal}`;
					} else {
						state.currentVal = "NaN";
						state.operationDisplay = "Cannot divide by 0";
					}
					break;
			}
			state.previousVal = null;
			state.operation = null;
		},
		clear: (state) => {
			state.currentVal = "0";
			state.operation = null;
			state.previousVal = null;
			state.operationDisplay = "";
		},
	},
});

export default operationsSlice.reducer;

export const { inputNumber, selectOperation, calculate, clear } =
	operationsSlice.actions;
