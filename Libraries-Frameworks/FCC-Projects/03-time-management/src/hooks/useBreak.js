import { useEffect, useState } from "react";

export const useBreak = () => {
	const [initialMinuteBreak, setInitialMinuteBreak] = useState(5);
	const [minutesBreak, setMinutesBreak] = useState(5);
	const [secondsBreak, setSecondsBreak] = useState(0);
	const [isBreak, setIsBreak] = useState(false);
	const [isRunningBreak, setIsRunningBreak] = useState(false);

	useEffect(() => {
		let interval;
		if (isRunningBreak) {
			interval = setInterval(() => {
				if (secondsBreak === 0) {
					if (minutesBreak === 0) {
						setIsBreak(false);
						setIsRunningBreak(false);
                        setMinutesBreak(initialMinuteBreak);
                        setSecondsBreak(0);
						return;
					}
					setMinutesBreak((prev) => prev - 1);
					setSecondsBreak(59);
				} else {
					setSecondsBreak((prev) => prev - 1);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isRunningBreak, minutesBreak, secondsBreak]);
    
	const handleIncrement = () => {
		if (minutesBreak === 60 || isRunningBreak) {
			return;
		}
		const newMinutes = initialMinuteBreak + 1;
		setInitialMinuteBreak(newMinutes);
		setMinutesBreak(newMinutes);
		setSecondsBreak(0);
	};
	const handleDecrement = () => {
		if (minutesBreak === 1) {
			return;
		}
		const newMinutes = initialMinuteBreak - 1;
		setInitialMinuteBreak(newMinutes);
		setMinutesBreak(newMinutes);
		setSecondsBreak(0);
	};

	const toggleReproductionBreak = () => {
		setIsRunningBreak(!isRunningBreak);
	};

	const resetBreakTimer = () => {
		setMinutesBreak(5);
		setInitialMinuteBreak(5);
		setSecondsBreak(0);
		setIsBreak(false);
		setIsRunningBreak(false);
	};

	return {
        initialMinuteBreak,
		minutesBreak,
		secondsBreak,
		handleIncrement,
		handleDecrement,
		isBreak,
		isRunningBreak,
		toggleReproductionBreak,
		resetBreakTimer,
        setIsBreak
	};
};