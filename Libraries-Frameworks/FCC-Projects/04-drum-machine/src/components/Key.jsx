import { useEffect, useRef } from 'react';

export const Key = ({ id, keyTrigger, url, keyCode, power, updateDisplay, volume }) => {
    const audioRef = useRef(null);

    useEffect(
        () => {
            const handleKeyPress = (e) => {
                if (e.keyCode === keyCode) {
                    playSound();
                }
            }
            document.addEventListener('keydown', handleKeyPress);
            return () => {
                document.removeEventListener('keydown', handleKeyPress);
            } 
        }
    , [keyCode])

    useEffect(
        () => {
            if(audioRef.current){
                audioRef.current.volume = volume;
            }
        }
    , [volume])

    const playSound = () => {
        if(power && audioRef.current){
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            updateDisplay(id.replace(/-/g, ' '));
        }
    }

    return (
        <div className="drum-key" id={id} onClick={playSound}>
            <audio src={url} className="clip" id={keyTrigger} ref={audioRef} ></audio>
            {keyTrigger}
        </div>
    )
}