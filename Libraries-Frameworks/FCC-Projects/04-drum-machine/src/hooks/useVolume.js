import { useContext } from "react";
import { DrumMachineContext } from "../context/drumMachine";

export const useVolume = () => {

	const { volume, setVolume, power, setDisplay } = useContext(DrumMachineContext);

	const adjustVolume = (e) => {
		if (power) {
			const newVolume = e.target.value;
			setVolume(newVolume);
			setDisplay(`Volume: ${Math.round(newVolume * 100)}`);
			setTimeout(() => {
				setDisplay(String.fromCharCode(160));
			}, 1000);
		}
	};

    return { volume, adjustVolume };
};
