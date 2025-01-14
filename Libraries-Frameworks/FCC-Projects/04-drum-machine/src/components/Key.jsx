import { useRef } from "react";
import { playSound, applyColor } from "../logic/drum-machine";
import { useKey } from "../hooks/useKey";
import { usePower } from "../hooks/usePower";
import { useVolume } from "../hooks/useVolume";
import { useDisplay } from "../hooks/useDisplay";
import PropTypes from "prop-types";

export const Key = ({ id, keyTrigger, url, keyCode }) => {
	const audioRef = useRef(null);
	const { power } = usePower();
	const { volume } = useVolume();
	const { updateDisplay } = useDisplay();

	const handlePlay = () => {
		playSound({ audioRef, power, updateDisplay, id });
	};
	const handleColor = () => {
		applyColor({ power, setStyle });
	};
	const { style, setStyle } = useKey({
		keyCode,
		volume,
		audioRef,
		handlePlay,
		handleColor,
	});

	return (
		<div
			className="drum-key"
			id={id}
			onClick={() => {
				handlePlay();
				handleColor();
			}}
			style={style}
		>
			<audio
				src={url}
				className="clip"
				id={keyTrigger}
				ref={audioRef}
			></audio>
			{keyTrigger}
		</div>
	);
};

Key.propTypes = {
	id: PropTypes.string.isRequired,
	keyTrigger: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	keyCode: PropTypes.number.isRequired,
};
