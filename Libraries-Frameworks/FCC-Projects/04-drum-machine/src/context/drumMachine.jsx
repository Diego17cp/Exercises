import { createContext, useState } from "react";
import { heaterKit } from "../constants/consts";

export const DrumMachineContext = createContext();

export const DrumMachineProvider = ({ children }) => {
	const [power, setPower] = useState(true);
	const [volume, setVolume] = useState(0.5);
	const [display, setDisplay] = useState(String.fromCharCode(160));
	const [bank, setBank] = useState(heaterKit);
	const [currentPadBankId, setCurrentPadBankId] = useState("Heater Kit");

    return (
        <DrumMachineContext.Provider value={{
            power, setPower,
            volume, setVolume,
            display, setDisplay,
            bank, setBank,
            currentPadBankId, setCurrentPadBankId
        }}>
            {children}
        </DrumMachineContext.Provider>
    )
};
