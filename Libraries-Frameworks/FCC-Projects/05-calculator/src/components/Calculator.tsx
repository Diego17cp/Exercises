import { useAppSelector } from "../hooks/operations";
import { Pad } from "./Pad";

export const Calculator = () => {

    const value = useAppSelector((state) => state.operations);

	return (
		<main className="mx-auto my-30 p-2 bg-cyan-800 rounded-lg shadow-lg h-120 w-85 justify-center items-center flex flex-col gap-2">
			<div
				className="w-full h-1/5 bg-black px-4 py-2 flex flex-col gap-2"
				style={{
					fontFamily: "Zen Dots, serif",
				}}
			>
				<div className="width-full h-1/3 text-amber-400 flex justify-end items-start text-md"></div>
				<div className="w-full h-2/3 flex justify-end items-center text-3xl text-white">
					{value}
				</div>
			</div>
			<Pad></Pad>
		</main>
	);
};
