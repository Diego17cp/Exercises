
export const Key = ({ id, keyTrigger, url, keyCode }) => {
    return (
        <div className="drum-key" id={id}>
            <audio src={url} className="clip" id={keyTrigger} ></audio>
            {keyTrigger}
        </div>
    )
}