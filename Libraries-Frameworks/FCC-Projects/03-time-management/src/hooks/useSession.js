import { useEffect, useState } from "react";

export const useSession = () => {
	const [minutesSession, setMinutesSession] = useState(25);
	const [secondsSession, setSecondsSession] = useState(0);
	const [isSession, setIsSession] = useState(true);
	const [isRunningSession, setIsRunningSession] = useState(false);
	const [initialMinutesSession, setInitialMinute] = useState(25);

	useEffect(() => {
		let interval;
		if (isRunningSession) {
			interval = setInterval(() => {
				if (secondsSession === 0) {
					if (minutesSession === 0) {
						setIsSession(false);
						setIsRunningSession(false);
						setMinutesSession(initialMinutesSession);
						setSecondsSession(0);
						return;
					}
					setMinutesSession((prev) => prev - 1);
					setSecondsSession(59);
				} else {
					setSecondsSession((prev) => prev - 1);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isRunningSession, minutesSession, secondsSession]);

	const handleIncrement = () => {
		if (initialMinutesSession === 60 || isRunningSession) {
			return;
		}
		const newMinutes = initialMinutesSession + 1;
		setInitialMinute(newMinutes);
		setMinutesSession(newMinutes);
		setSecondsSession(0);
	};
	const handleDecrement = () => {
		if (initialMinutesSession === 1 || isRunningSession) {
			return;
		}
		const newValue = initialMinutesSession - 1;
		setInitialMinute(newValue);
		setMinutesSession(newValue);
		setSecondsSession(0);
	};

	const toggleReproductionSession = () => {
		setIsRunningSession(!isRunningSession);
	};

	const resetSessionTimer = () => {
		setInitialMinute(25);
		setMinutesSession(25);
		setSecondsSession(0);
		setIsRunningSession(false);
		setIsSession(true);
	};

	return {
		initialMinutesSession,
		minutesSession,
		secondsSession,
		handleIncrement,
		handleDecrement,
		isRunningSession,
		toggleReproductionSession,
		isSession,
		setIsSession,
		resetSessionTimer,
	};
};
