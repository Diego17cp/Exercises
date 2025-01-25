import {
	add,
	subtract,
	multiply,
	divide,
	clear,
} from "../store/operations/operationsSlice";
import { useAppDispatch } from "./operations";

export const useOperationsActions = () => {
	const dispatch = useAppDispatch();

	const addOperation = (value: number) => {
		dispatch(add(value));
	};

	const subtractOperation = (value: number) => {
		dispatch(subtract(value));
	};

	const multiplyOperation = (value: number) => {
		dispatch(multiply(value));
	};

	const divideOperation = (value: number) => {
		dispatch(divide(value));
	};

	const clearOperation = () => {
		dispatch(clear());
	};

	return {
		addOperation,
		subtractOperation,
		multiplyOperation,
		divideOperation,
		clearOperation,
	};
};
