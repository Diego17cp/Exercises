import { create } from "zustand";
import { type Question } from "../types.d";
import confetti from "canvas-confetti";
import { persist } from "zustand/middleware";

interface State {
	questions: Question[];
	currentQuestion: number;
	points: number;
	maxPoints: number;
	isModalVisible: boolean;
	toggleModal: (val: boolean) => void;
	fetchQuestions: (limit: number) => Promise<void>;
	selectAnswer: (questionId: number, answerIndex: number) => void;
	goNextQuestion: () => void;
	goPrevQuestion: () => void;
	reset: () => void;
}

export const useQuestionsStore = create<State>()(
	persist(
		(set, get) => {
			return {
				questions: [],
				currentQuestion: 0,
				points : 0,
				maxPoints: 20,
				isModalVisible: false,

				fetchQuestions: async (limit: number) => {
					const res = await fetch(`http://localhost:5173/data.json`);
					const data = await res.json();

					const questions = data
						.sort(() => Math.random() - 0.5)
						.slice(0, limit);
					set({ questions });
				},
				selectAnswer: (questionId: number, answerIndex: number) => {
					const { questions } = get();
					const { points } = get();
					const newQuestions = structuredClone(questions);
					const questionIndex = newQuestions.findIndex(
						(q) => q.id === questionId
					);
					const questionInfo = newQuestions[questionIndex];
					const isCorrect =
						questionInfo.correctAnswer === answerIndex;
					if (isCorrect) {
						confetti();
						set({ points: points + 4 });
					}

					newQuestions[questionIndex] = {
						...questionInfo,
						isCorrect,
						userSelectedAnswer: answerIndex,
					};

					set({ questions: newQuestions });
				},
				goNextQuestion: () => {
					const { currentQuestion, questions } = get();
					const nextQuestion = currentQuestion + 1;
					if (nextQuestion < questions.length) {
						set({ currentQuestion: nextQuestion });
					}
				},
				goPrevQuestion: () => {
					const { currentQuestion } = get();
					const prevQuestion = currentQuestion - 1;
					if (prevQuestion >= 0) {
						set({ currentQuestion: prevQuestion });
					}
				},
				reset: () => {
					set({ currentQuestion: 0, questions: [], points: 0 });
				},
				toggleModal: (val: boolean) => {
					if (val) {
						confetti();
					}
					set({ isModalVisible: val });
				},
			};
		},
		{
			name: "questions",
		}
	)
);
