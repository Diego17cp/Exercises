import { useEffect, useState } from "react";

export const useKey = ({ keyCode, volume, audioRef, handlePlay, handleColor }) => {
	const [style, setStyle] = useState({
		backgroundColor: "#8a8a8ac9",
		boxShadow: "1px 1px 8px 2px #6d6f6fd0",
	});
	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.keyCode === keyCode) {
				handlePlay();
				handleColor()
			}
		};
		document.addEventListener("keydown", handleKeyPress);
		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [keyCode]);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
		}
	}, [volume]);

    return {
        style, 
        setStyle
    }
};
