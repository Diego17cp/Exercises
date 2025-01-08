import { useState } from "react"
import { useSession } from "../hooks/useSession"
import { useBreak } from "../hooks/useBreak"


export const Timer = () => {
    const { minutesSession, secondsSession, isSession, isRunningSession, toggleReproductionSession, setMinutesSession, setSecondsSession, resetSessionTimer } = useSession()
    const { minutesBreak, secondsBreak, isBreak, isRunningBreak, toggleReproductionBreak, setMinutesBreak, setSecondsBreak, resetBreakTimer } = useBreak()

    const toggleReproduction = () => {
        if (isSession) {
            toggleReproductionSession()
        }else {
            toggleReproductionBreak()
        }
    }

    const handleReset = () => {
        if (isRunningSession) {
            resetSessionTimer()
        }
        if (isRunningBreak){
            resetBreakTimer()
        }
    }
    return (
        <div className="timer">
            <div className="timer-wrapper">
                <div className="timer-label" id="timer-label">
                    Session
                </div>
                <div className="time-left" id="time-left">
                    <span id="time">
                        {
                            isSession ? 
                            `${minutesSession < 10 ? `0${minutesSession}` : minutesSession}:${secondsSession < 10 ? `0${secondsSession}` : secondsSession}` :
                            isBreak ?
                            `${minutesBreak < 10 ? `0${minutesBreak}` : minutesBreak}:${secondsBreak < 10 ? `0${secondsBreak}` : secondsBreak}` :
                            ""
                        }
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
    )
}