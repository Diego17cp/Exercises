import { useQuestionsData } from "../hooks/useQuestionsData";

export const Footer = () => {
	const { correct, incorrect, unanswered } = useQuestionsData();
	return (
		<footer
			style={{
				marginTop: "2rem",
			}}
		>
			<strong>
				{`✅ ${correct} - ❌ ${incorrect} - ❓ ${unanswered}`}
			</strong>
			<p>© 2021 JavaScript Quiz</p>
		</footer>
	);
};
