import {
	inputNumber,
    selectOperation,
    calculate,
    clear,
    Operations
} from "../store/operations/operationsSlice";
import { useAppDispatch } from "./operations";

export const useOperationsActions = () => {
	const dispatch = useAppDispatch();

    const handleInputNum = (num: number) => {
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
