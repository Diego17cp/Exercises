import { useOperationsActions } from "../hooks/useOperations";

export const NumberPad = () => {
	const btnStyle =
		"bg-gray-400 cursor-pointer text-xl active:bg-gray-500 active:scale-90 transition-all duration-500";
	const border = {
		border: "1px solid #d1d5dc",
	};
	const { handleInputNum } = useOperationsActions();
	return (
		<section className="h-full w-3/4">
			<div className="number-pad grid grid-cols-3 grid-rows-4 h-full">
				<button
					className={btnStyle}
					style={border}
					onClick={() => handleInputNum("7")}
				>
					7
				</button>
				<button
					className={btnStyle}
					style={border}
					onClick={() => handleInputNum("8")}
				>
					8
				</button>
				<button
					className={btnStyle}
					style={border}
					onClick={() => handleInputNum("9")}
				>
					9
				</button>
				<button
					className={btnStyle}
					style={border}
					onClick={() => handleInputNum("6")}
				>
					6
				</button>
				<button
					className={btnStyle}
					style={border}
					onClick={() => handleInputNum("5")}
				>
					5
				</button>
				<button
					className={btnStyle}
					style={border}
					onClick={() => handleInputNum("4")}
				>
					4
				</button>
				<button
					className={btnStyle}
					style={border}
					onClick={() => handleInputNum("3")}
				>
					3
				</button>
				<button
					className={btnStyle}
					style={border}
					onClick={() => handleInputNum("2")}
				>
					2
				</button>
				<button
					className={btnStyle}
					style={border}
					onClick={() => handleInputNum("1")}
				>
					1
				</button>
				<button
					className={`col-span-2 ${btnStyle}`}
					style={border}
					onClick={() => handleInputNum("0")}
				>
					0
				</button>
				<button
					className={`${btnStyle}`}
					style={border}
					onClick={() => handleInputNum(".")}
				>
					.
				</button>
			</div>
		</section>
	);
};
