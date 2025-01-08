import { useSession } from "./hooks/useSession";
import { useBreak } from "./hooks/useBreak";
import { Session } from "./Components/Session";
import { Break } from "./Components/Break";
import "./App.css";
import { Timer } from "./Components/Timer";

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
				></Timer>
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
