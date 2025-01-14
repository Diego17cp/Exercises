import { colors } from "../constants/consts";

export const playSound = ({ audioRef, power, updateDisplay, id }) => {
	if (power && audioRef.current) {
		audioRef.current.currentTime = 0;
		audioRef.current.play();
		updateDisplay(id.replace(/-/g, " "));
	}
};
export const applyColor = ({ power, setStyle }) => {
	const color = colors[Math.floor(Math.random() * colors.length)];
	if (power) {
		setStyle({
			backgroundColor: color,
			boxShadow: `1px 1px 8px 2px ${color}d0`,
			color: "#000",
		});
		setTimeout(() => {
			setStyle({
				backgroundColor: "#8a8a8ac9",
				boxShadow: "1px 1px 8px 2px #6d6f6fd0",
			});
		}, 700);
	}
};
