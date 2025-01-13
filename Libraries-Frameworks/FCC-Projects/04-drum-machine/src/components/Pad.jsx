import { Key } from "./Key.jsx";
export const Pad = ({ currentPadBank, power, updateDisplay, volume }) => {
	return (
		<section className="pad-bank">
			{currentPadBank.map((pad) => (
				<Key
					key={pad.id}
					id={pad.id}
					keyTrigger={pad.keyTrigger}
					keyCode={pad.keyCode}
					url={pad.url}
					power={power}
					updateDisplay={updateDisplay}
					volume={volume}
				/>
			))}
		</section>
	);
};
