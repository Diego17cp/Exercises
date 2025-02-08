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
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Footer } from "./Footer";
import { PointsModal } from "./PointsModal";
import { useEffect } from "react";

const Question = ({ info }: { info: QuestionType }) => {
	const selectAnswer = useQuestionsStore((state) => state.selectAnswer);
	const isVisible = useQuestionsStore((state) => state.isModalVisible);

	const handleClick = (answerIndex: number) => () => {
		selectAnswer(info.id, answerIndex);
	};
	const getBg = (index: number) => {
		const { userSelectedAnswer, correctAnswer } = info;

		if (userSelectedAnswer === null) return "transparent";
		if (index !== correctAnswer && index !== userSelectedAnswer)
			return "transparent";
		if (index === correctAnswer && userSelectedAnswer != null)
			return "green";
		if (index === userSelectedAnswer) return "red";
		return "transparent";
	};

	return (
		<Card
			variant="outlined"
			sx={{
				textAlign: "left",
				p: 2,
				bgcolor: "background.paper",
				mt: 4,
				opacity: isVisible ? 0.3 : 1,
				transition: "all 0.5s ease",
			}}
		>
			<Typography variant="h5">{info.question}</Typography>
			<SyntaxHighLighter language="javascript" style={gradientDark}>
				{info.code}
			</SyntaxHighLighter>
			<List sx={{ bgcolor: "#333" }} disablePadding>
				{info.answers.map((answer, index) => (
					<ListItem key={index} divider>
						<ListItemButton
							disabled={info.userSelectedAnswer != null}
							onClick={handleClick(index)}
							sx={{ bgcolor: getBg(index) }}
						>
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
	const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
	const goPrevQuestion = useQuestionsStore((state) => state.goPrevQuestion);
	const toggleModal = useQuestionsStore((state) => state.toggleModal);
	const questionInfo = questions[currentQuestion];

	useEffect(() => {
		if (questions.length > 0 && questionInfo) {
			if (questions.every((q) => q.userSelectedAnswer != null)) {
				toggleModal(true);
			}
		}
	}, [questions, questionInfo, toggleModal]); // Agregamos currentQuestion como dependencia
	return (
		<>
			<Stack
				direction={"row"}
				gap={2}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<IconButton
					onClick={goPrevQuestion}
					disabled={currentQuestion === 0}
				>
					<ArrowBackIosNew />
				</IconButton>
				<Typography variant={"h6"}>
					{currentQuestion + 1} / {questions.length}
				</Typography>
				<IconButton
					onClick={goNextQuestion}
					disabled={currentQuestion >= questions.length - 1}
				>
					<ArrowForwardIos />
				</IconButton>
			</Stack>
			<Question info={questionInfo}></Question>
			<PointsModal />
			<Footer />
		</>
	);
};
