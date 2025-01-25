

export const NumberPad = () => {
    const btnStyle = "bg-gray-400 cursor-pointer border-2 border-gray-300 text-xl active:bg-gray-500 active:scale-90 transition-all duration-500";
    return (
        <section className="h-52 w-52 bg-gray-800">
            <div className="number-pad grid grid-cols-3 grid-rows-3 h-full h-3/4">
                <button className={btnStyle}>7</button>
                <button className={btnStyle}>8</button>
                <button className={btnStyle}>9</button>
                <button className={btnStyle}>6</button>
                <button className={btnStyle}>5</button>
                <button className={btnStyle}>4</button>
                <button className={btnStyle}>3</button>
                <button className={btnStyle}>2</button>
                <button className={btnStyle}>1</button>
            </div>
            <div className="flex w-full h-1/5">
                <button className={`w-2/3 ${btnStyle}`}>0</button>
                <button className={`w-1/3 ${btnStyle}`}>.</button>
            </div>
        </section>
    )
}