import {
	inputNumber,
	selectOperation,
	calculate,
	clear,
	resetDigitLimit,
} from "../store/operations/operationsSlice";
import { Operations } from "../types";
import { useAppDispatch } from "./operations";

export const useOperationsActions = () => {
	const dispatch = useAppDispatch();

	const handleInputNum = (num: string) => {
		dispatch(inputNumber(num));
		if (num !== "." && num !== "0") {
			setTimeout(() => {
				dispatch(resetDigitLimit());
			}, 2500);
		}
	};
	const handleSelectOperation = (operation: Operations) => {
		dispatch(selectOperation(operation));
	};
	const handleCalc = () => {
		dispatch(calculate());
	};

	const clearOperation = () => {
		dispatch(clear());
	};

	return {
		handleInputNum,
		handleSelectOperation,
		handleCalc,
		clearOperation,
	};
};
