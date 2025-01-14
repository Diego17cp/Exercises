import { useBank } from "../hooks/useBank.js";
import { Key } from "./Key.jsx";


export const Pad = () => {
	const { bank: currentPadBank } = useBank();
	return (
		<section className="pad-bank">
			{currentPadBank.map((pad) => (
				<Key
					key={pad.id}
					id={pad.id}
					keyTrigger={pad.keyTrigger}
					keyCode={pad.keyCode}
					url={pad.url}
				/>
			))}
		</section>
	);
};
