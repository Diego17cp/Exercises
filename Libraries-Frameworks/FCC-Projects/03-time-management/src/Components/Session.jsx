import { useSession } from "../hooks/useSession"


export const Session = () => {
    const { counter, handleIncrement, handleDecrement } = useSession()
    
    return (
        <div className="length-control">
            <span className="session-label">
                Session Length
            </span>
            <div className="controls session-controls">
                <button id="session-increment" onClick={handleIncrement}>
                    <i className="fa fa-arrow-up"></i>
                </button>
                <span id="session-length">{ counter }</span>
                <button id="session-decrement" onClick={handleDecrement}>
                    <i className="fa fa-arrow-down"></i>
                </button>
            </div>
        </div>
    )
}