
export const playAudio = (audioRef) => {
    if(audioRef.current){
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        audioRef.current.play().catch((err) => {
            console.error("Error playing audio:", err);
        });
    }
}

export const resetAudio = (audioRef) => {
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }
}