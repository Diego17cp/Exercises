import { useEffect } from "react"
import PropTypes from 'prop-types'

export const Timer = ({
	isSession,
	toggleReproductionSession,
	isRunningSession,
	resetSessionTimer,
	minutesSession,
	secondsSession,
	minutesBreak,
	secondsBreak,
	isBreak,
	toggleReproductionBreak,
	resetBreakTimer,
	isRunningBreak,
    setIsSession,
    setIsBreak
}) => {

    useEffect(
        () => {
            if(!isSession && !isRunningSession) {
                setIsBreak(true)
                toggleReproductionBreak()
            }
        }
    , [isSession, isRunningSession])

    useEffect(
        () => {
            if(!isBreak && !isRunningBreak && minutesSession === 0 && secondsSession === 0) {
                setIsSession(true)
                toggleReproductionSession()
            }
        }
    , [isBreak, isRunningBreak, minutesSession, secondsSession])
    

    const label = isSession ? "Session" : "Break";

	const toggleReproduction = () => {
		if (isSession) {
			toggleReproductionSession();
		} else {
			toggleReproductionBreak();
		}
	};

	const handleReset = () => {
		resetBreakTimer()
        resetSessionTimer()
	};


	return (
		<div className="timer">
			<div className="timer-wrapper">
				<div className="timer-label" id="timer-label">
					{label}
				</div>
				<div className="time-left" id="time-left">
					<span id="time">
						{isSession
							? `${
									minutesSession < 10
										? `0${minutesSession}`
										: minutesSession
							}:${
									secondsSession < 10
										? `0${secondsSession}`
										: secondsSession
							}`
							: isBreak
							? `${
									minutesBreak < 10
										? `0${minutesBreak}`
										: minutesBreak
							}:${
									secondsBreak < 10
										? `0${secondsBreak}`
										: secondsBreak
							}`
							: ""}
					</span>
				</div>
			</div>
			<div className="timer-controls">
				<button id="start_stop" onClick={toggleReproduction}>
					<i className="fa fa-play"></i>
					<i className="fa fa-pause"></i>
				</button>
				<button id="reset" onClick={handleReset}>
					<i className="fa fa-refresh"></i>
				</button>
			</div>
		</div>
	);
};

Timer.propTypes = {
    isSession: PropTypes.bool.isRequired,
    toggleReproductionSession: PropTypes.func.isRequired,
    isRunningSession: PropTypes.bool.isRequired,
    resetSessionTimer: PropTypes.func.isRequired,
    minutesSession: PropTypes.number.isRequired,
    secondsSession: PropTypes.number.isRequired,
    minutesBreak: PropTypes.number.isRequired,
    secondsBreak: PropTypes.number.isRequired,
    isBreak: PropTypes.bool.isRequired,
    toggleReproductionBreak: PropTypes.func.isRequired,
    resetBreakTimer: PropTypes.func.isRequired,
    isRunningBreak: PropTypes.bool.isRequired,
    setIsSession: PropTypes.func.isRequired,
    setIsBreak: PropTypes.func.isRequired
}