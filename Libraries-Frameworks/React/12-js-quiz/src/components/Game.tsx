import {
	Card,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";
import { useQuestionsStore } from "../store/questions";
import SyntaxHighLighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { type Question as QuestionType } from "../types.d";

const Question = ({ info }: { info: QuestionType }) => {
	return (
		<Card
			variant="outlined"
			sx={{ textAlign: "left", p: 2, bgcolor: "background.paper", mt: 4 }}
		>
			<Typography variant="h5">{info.question}</Typography>
			<SyntaxHighLighter language="javascript" style={gradientDark}>
				{info.code}
			</SyntaxHighLighter>
			<List sx={{ bgcolor: "#333" }} disablePadding>
				{info.answers.map((answer, index) => (
					<ListItem key={index} divider>
						<ListItemButton>
							<ListItemText primary={answer}></ListItemText>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Card>
	);
};

export const Game = () => {
	const questions = useQuestionsStore((state) => state.questions);
	const currentQuestion = useQuestionsStore((state) => state.currentQuestion);

	const questionInfo = questions[currentQuestion];

	return (
		<>
			<Question info={questionInfo}></Question>
		</>
	);
};
