import { useContext } from "react";
import { DrumMachineContext } from "../context/drumMachine";

export const usePower = () => {
	const { power, setPower, setDisplay } = useContext(DrumMachineContext);
	const togglePower = () => {
		setPower(!power);
		setDisplay(String.fromCharCode(160));
	};

	return {
		power,
		togglePower,
	};
};
