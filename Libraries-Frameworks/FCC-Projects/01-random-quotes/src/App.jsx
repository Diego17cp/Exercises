import { useState, useEffect } from "react";
import "./App.css";
import { Wrapper } from "./Components/Wrapper";
import { getRandomColor, getRandomQuote, fetchAllQuotes } from "./logic/logic";

export const App = () => {
	const [color, setColor] = useState(getRandomColor());
	const [quote, setQuote] = useState({
		text: "Loading...",
		author: "Please wait",
	});
  const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const loadQuotes = async () => {
			await fetchAllQuotes();
			const initialQuote = getRandomQuote();
			setQuote({
				text: initialQuote.quote,
				author: initialQuote.author,
			});
		};
		loadQuotes();
	}, []);

	useEffect(() => {
		document.body.style.backgroundColor = color;
	}, [color]);

	const changeQuote = () => {
    setOpacity(0);
    setTimeout(() => {
      setColor(getRandomColor());
      const newQuote = getRandomQuote();
      if (newQuote) {
        setQuote({
          text: newQuote.quote,
          author: newQuote.author,
        });
      }
      setOpacity(1);
    }, 500);
	};

	return (
		<Wrapper
			changeQuote={changeQuote}
			color={color}
			quote={quote.text}
			author={quote.author}
      opacity={opacity}
		/>
	);
};
