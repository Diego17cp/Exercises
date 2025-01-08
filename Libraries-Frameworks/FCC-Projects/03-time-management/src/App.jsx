import { useSession } from "./hooks/useSession";
import { useBreak } from "./hooks/useBreak";
import { Session } from "./Components/Session";
import { Break } from "./Components/Break";
import "./App.css";
import { Timer } from "./Components/Timer";
import { useRef } from "react";
import { playAudio, resetAudio } from "./Services/audio";

function App() {
	const {
		initialMinutesSession,
		minutesSession,
		secondsSession,
		isSession,
		isRunningSession,
		toggleReproductionSession,
		setIsSession,
		resetSessionTimer,
		handleDecrement,
		handleIncrement,
	} = useSession();
	const {
		initialMinuteBreak,
		minutesBreak,
		secondsBreak,
		isBreak,
		isRunningBreak,
		toggleReproductionBreak,
		setIsBreak,
		resetBreakTimer,
		handleDecrement: handleDecBreak,
		handleIncrement: handleIncBreak,
	} = useBreak();

  const audioRef = useRef(null);

  const handlePlay = () => {
    playAudio(audioRef);
  }
  const handleReset = () => {
    resetAudio(audioRef);
  }

	return (
		<div className="app">
			<header>
				<h1>Time Management Project</h1>
			</header>
			<main>
				<Break
					initialMinutesBreak={initialMinuteBreak}
					handleIncrement={handleIncBreak}
					handleDecrement={handleDecBreak}
				></Break>
				<Session
					initialMinutesSession={initialMinutesSession}
					handleDecrement={handleDecrement}
					handleIncrement={handleIncrement}
				></Session>
				<Timer
					minutesSession={minutesSession}
					secondsSession={secondsSession}
					isSession={isSession}
					isRunningSession={isRunningSession}
					toggleReproductionSession={toggleReproductionSession}
					resetSessionTimer={resetSessionTimer}
          minutesBreak={minutesBreak}
          secondsBreak={secondsBreak}
          isBreak={isBreak}
          toggleReproductionBreak={toggleReproductionBreak}
          resetBreakTimer={resetBreakTimer}
          isRunningBreak={isRunningBreak}
          setIsSession={setIsSession}
          setIsBreak={setIsBreak}
          playAudio={handlePlay}
          resetAudio={handleReset}
				></Timer>
        <audio id="beep" preload="auto" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav" ref={audioRef}></audio>
			</main>
			<footer>
				<p>
					Created by:{" "}
					<a href="https://github.com/Diego17cp">Diego17</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
