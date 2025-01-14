import { useContext } from "react";
import { DrumMachineContext } from "../context/drumMachine";

export const useDisplay = () => {
	const { display, setDisplay, power } = useContext(DrumMachineContext);
	const updateDisplay = (songName) => {
		if (power) {
			setDisplay(songName);
		}
	};
    return { display, updateDisplay, setDisplay };
};
