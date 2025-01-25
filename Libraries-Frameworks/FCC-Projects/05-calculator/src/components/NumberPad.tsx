export const NumberPad = () => {
	const btnStyle =
		"bg-gray-400 cursor-pointer text-xl active:bg-gray-500 active:scale-90 transition-all duration-500";
	const border = {
		border: "1px solid #d1d5dc",
	};
	return (
		<section className="h-full w-3/4">
			<div className="number-pad grid grid-cols-3 grid-rows-4 h-full">
				<button className={btnStyle} style={border}>
					7
				</button>
				<button className={btnStyle} style={border}>
					8
				</button>
				<button className={btnStyle} style={border}>
					9
				</button>
				<button className={btnStyle} style={border}>
					6
				</button>
				<button className={btnStyle} style={border}>
					5
				</button>
				<button className={btnStyle} style={border}>
					4
				</button>
				<button className={btnStyle} style={border}>
					3
				</button>
				<button className={btnStyle} style={border}>
					2
				</button>
				<button className={btnStyle} style={border}>
					1
				</button>
				<button className={`col-span-2 ${btnStyle}`} style={border}>
					0
				</button>
				<button className={`${btnStyle}`} style={border}>
					.
				</button>
			</div>
		</section>
	);
};
