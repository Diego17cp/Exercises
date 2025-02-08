import { Button, Card, Typography } from "@mui/material";
import { useQuestionsStore } from "../store/questions";
import CloseIcon from '@mui/icons-material/Close';


export const PointsModal = () => {
	const points = useQuestionsStore((state) => state.points);
	const maxPoints = useQuestionsStore((state) => state.maxPoints);
	const reset = useQuestionsStore((state) => state.reset);
    const isVisible = useQuestionsStore((state) => state.isModalVisible);
    const toggleModal = useQuestionsStore((state) => state.toggleModal);

	const handleClick = () => {
		toggleModal(false)
	};

	return (
		<Card
			variant="outlined"
			sx={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				p: 4,
				bgcolor: "background.paper",
				zIndex: 1000,
				opacity: isVisible ? 1 : 0,
				pointerEvents: isVisible ? "auto" : "none",
                height: '35%',
                width: '30%',
			}}
			style={{
				transition: "all 0.5s ease",
                boxShadow: '0 0 10px #125'
			}}
		>
			<Button
				onClick={handleClick}
				color="error"
				sx={{
					position: "absolute",
					top: 0,
					right: 0,
					m: 1,
					fontSize: 20,
				}}
			>
				<CloseIcon />
			</Button>
			<Typography variant="h3" sx={{
                mb: 2,
                textAlign: 'center'
            }}>Score</Typography>
			<Typography variant="h5" sx={{
                textAlign: 'center',
                mb: 2
            }}>
				You scored {points} out of {maxPoints}
			</Typography>
			{ points===maxPoints && (
				<Typography variant="h5">Perfect Score!🏆</Typography>
			)}
			<Button
				onClick={() => {
					reset();
					handleClick();
				}}
				sx={{ mt: 2, width: "100%" }}
                variant="contained"
			>
				Reset Game
			</Button>
		</Card>
	);
};
