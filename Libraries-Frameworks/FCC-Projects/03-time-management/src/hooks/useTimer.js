import { useEffect, useState } from "react";

export const useTimer = ({
	isSession,
	isRunningSession,
	isRunningBreak,
	minutesSession,
	minutesBreak,
	secondsSession,
	secondsBreak,
	setIsBreak,
	toggleReproductionBreak,
	toggleReproductionSession,
	setIsSession,
	resetBreakTimer,
	resetSessionTimer,
	playAudio,
	resetAudio
}) => {
	const [isFinishing, setIsFinishing] = useState(false);

	const finishingClass = isFinishing ? "finishing" : "";
	

	useEffect(() => {
		if (isSession && isRunningSession) {
			setIsFinishing(minutesSession <= 1);
		} else if (!isSession && isRunningBreak) {
			setIsFinishing(minutesBreak <= 1);
		} else {
			setIsFinishing(false);
		}
	}, [
		minutesSession,
		minutesBreak,
		isSession,
		isRunningSession,
		isRunningBreak,
	]);

	useEffect(() => {
		if (minutesSession === 0 && secondsSession === 0 && isRunningSession) {
			playAudio();
			setIsBreak(true);
			toggleReproductionBreak();
		}
	}, [minutesSession, secondsSession, isRunningSession]);

	useEffect(() => {
		if (minutesBreak === 0 && secondsBreak === 0 && isRunningBreak) {
			playAudio();
			setIsSession(true);
			toggleReproductionSession();
		}
	}, [minutesBreak, secondsBreak, isRunningBreak]);

	const label = isSession ? "Session" : "Break";

	const toggleReproduction = () => {
		if (isSession) {
			toggleReproductionSession();
		} else {
			toggleReproductionBreak();
		}
	};

	const handleReset = () => {
		resetBreakTimer();
		resetSessionTimer();
		resetAudio();
	};
    return {
        label,
        finishingClass,
        toggleReproduction,
        handleReset
    }
};
