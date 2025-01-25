export type Operations = "add" | "subtract" | "multiply" | "divide" | null;
export interface OperationsState {
	currentVal: string;
	operation: Operations;
	previousVal: null | number;
	operationDisplay: string;
}