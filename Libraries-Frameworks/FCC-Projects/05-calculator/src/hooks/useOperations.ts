import {
	inputNumber,
    selectOperation,
    calculate,
    clear
} from "../store/operations/operationsSlice";
import { Operations } from "../types";
import { useAppDispatch } from "./operations";

export const useOperationsActions = () => {
	const dispatch = useAppDispatch();

    const handleInputNum = (num: string) => {
        dispatch(inputNumber(num));
    }
    const handleSelectOperation = (operation: Operations) => {
        dispatch(selectOperation(operation));
    }
	const handleCalc = () => {
        dispatch(calculate());
    }

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
