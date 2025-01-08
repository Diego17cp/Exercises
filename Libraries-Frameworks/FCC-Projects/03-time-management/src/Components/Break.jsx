import { useBreak } from "../hooks/useBreak"

export const Break = () => {
    const { counter, handleDecrement, handleIncrement } = useBreak()
    return (
        <div className="length-control">
            <span className="break-label">
                Break Length
            </span>
            <div className="controls break-controls">
                <button id="break-increment" onClick={handleIncrement}>
                    <i className="fa fa-arrow-up"></i>
                </button>
                <span id="break-length">{ counter }</span>
                <button id="break-decrement" onClick={handleDecrement}>
                    <i className="fa fa-arrow-down"></i>
                </button>
            </div>
        </div>
    )
}