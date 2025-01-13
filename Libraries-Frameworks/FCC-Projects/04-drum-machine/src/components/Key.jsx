import { useEffect, useRef, useState } from 'react';

export const Key = ({ id, keyTrigger, url, keyCode, power, updateDisplay, volume, colors }) => {
    const audioRef = useRef(null);
    const [style, setStyle] = useState({
        backgroundColor: '#8a8a8ac9',
        boxShadow: '1px 1px 8px 2px #6d6f6fd0',
    });
    
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
    const applyColor = () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        if(power){
            setStyle({
                backgroundColor: color,
                boxShadow: `1px 1px 8px 2px ${color}d0`,
                color: '#000'
            });
            setTimeout(() => {
                setStyle({
                    backgroundColor: '#8a8a8ac9',
                    boxShadow: '1px 1px 8px 2px #6d6f6fd0'
                });
            }, 700);
        }
    }
    return (
        <div className="drum-key" id={id} onClick={()=>{
            playSound();
            applyColor();
        }} style={style}>
            <audio src={url} className="clip" id={keyTrigger} ref={audioRef} ></audio>
            {keyTrigger}
        </div>
    )
}