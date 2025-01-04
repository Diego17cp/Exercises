import { colors } from "../constants/consts";

let allQuotes = [];

export const fetchAllQuotes = async () => {
	try {
		const response = await fetch(
			"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
		);
		const data = await response.json();
		allQuotes = data.quotes;
	} catch (error) {
		console.error(error);
	}
};

export const getRandomColor = () => {
	return colors[Math.floor(Math.random() * colors.length)];
};

export const getRandomQuote = () => {
	return allQuotes[Math.floor(Math.random() * allQuotes.length)];
};

fetchAllQuotes();
