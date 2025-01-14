import { useContext } from "react";
import { heaterKit, smoothPianoKit } from "../constants/consts";
import { DrumMachineContext } from "../context/drumMachine";

export const useBank = () => {
	const {
		bank,
		setBank,
		currentPadBankId,
		setCurrentPadBankId,
		power,
		setDisplay,
	} = useContext(DrumMachineContext);
	const toggleBank = () => {
		if (power) {
			if (bank === heaterKit) {
				setBank(smoothPianoKit);
				setDisplay("Smooth Piano Kit");
				setCurrentPadBankId("Smooth Piano Kit");
			} else {
				setBank(heaterKit);
				setDisplay("Heater Kit");
				setCurrentPadBankId("Heater Kit");
			}
		}
	};

	return { bank, toggleBank, currentPadBankId };
};
