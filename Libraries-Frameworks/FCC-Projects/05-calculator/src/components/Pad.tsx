import { useOperationsActions } from "../hooks/useOperations";
import { NumberPad } from "./NumberPad";
export const Pad = () => {
	const { clearOperation } = useOperationsActions();
	const border = {
		border: "1px solid #d1d5dc",
	};
	return (
		<div className="w-full h-4/5 font-mono">
			<div className="h-1/5 flex w-full ">
				<button
					className="bg-red-500 text-white w-2/3 text-xl active:bg-red-700 active:scale-90 transition-all duration-500 cursor-pointer"
					style={border}
					onClick={clearOperation}
				>
					AC
				</button>
				<button
					className="bg-gray-500 text-white w-1/3 text-xl active:bg-gray-600 active:scale-90 transition-all duration-500 cursor-pointer"
					style={border}
				>
					/
				</button>
				<button
					className="bg-gray-500 text-white w-1/3 text-xl active:bg-gray-600 active:scale-90 transition-all duration-500 cursor-pointer"
					style={border}
				>
					X
				</button>
			</div>
			<div className="flex h-4/5 w-full">
				<NumberPad />
				<div className="w-1/4 h-full grid grid-rows-4">
					<button
						className="bg-gray-500 text-white w-full text-xl active:bg-gray-600 active:scale-90 transition-all duration-500 cursor-pointer"
						style={border}
					>
						+
					</button>
					<button
						className="bg-gray-500 text-white w-full text-xl active:bg-gray-600 active:scale-90 transition-all duration-500 cursor-pointer"
						style={border}
					>
						-
					</button>
					<button
						className="bg-blue-900 text-white row-span-2 w-full text-xl active:bg-blue-950 active:scale-90 transition-all duration-500 cursor-pointer"
						style={border}
					>
						{" "}
						=
					</button>
				</div>
			</div>
		</div>
	);
};
