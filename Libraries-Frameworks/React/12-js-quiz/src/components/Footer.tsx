import { Button } from "@mui/material";
import { useQuestionsData } from "../hooks/useQuestionsData";
import { useQuestionsStore } from "../store/questions";

export const Footer = () => {
	const { correct, incorrect, unanswered } = useQuestionsData();
	const reset = useQuestionsStore((state) => state.reset);

	return (
		<footer
			style={{
				marginTop: "2rem",
			}}
		>
			<strong>
				{`✅ ${correct} - ❌ ${incorrect} - ❓ ${unanswered}`}
			</strong>
			<div
				style={{
					marginTop: "1rem",
				}}
			>
				<Button onClick={() => reset()}>Reset Game</Button>
			</div>
			<p>
				© 2024 - Made by Diego17 following React Cours of{" "}
				<a href="http://youtube.com/MiduDev">@MiduDev</a>
			</p>
		</footer>
	);
};
