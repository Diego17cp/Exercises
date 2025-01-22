/* eslint-disable react/react-in-jsx-scope */
// import { useReducer, useState } from 'react'
import { useStore } from "./hooks/useStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { AUTO_LANG } from "./constants";
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from "./components/Iconos";
import { LanguageSelector } from "./components/LanguageSelector";
import { SectionType } from "./types.d";
import { TextArea } from "./components/TextArea";
import { useEffect } from "react";
import { translate } from "./services/translate";
import { useDebounce } from "./hooks/useDebounce";

function App() {
	const {
		fromLang,
		toLang,
		interchangeLang,
		setFromLang,
		setToLang,
		fromText,
		result,
		setFromText,
		setResult,
		loading,
	} = useStore();

	const debouncedFromText = useDebounce(fromText, 300);

	useEffect(() => {
		if (debouncedFromText === "") return;
		translate({ fromLang, toLang, text: debouncedFromText })
			.then((res) => {
				if (res == null) return;
				setResult(res);
			})
			.catch((e) => setResult("Error"+ e));
	}, [toLang, fromLang]);

	const handleClipboard = () => {
		navigator.clipboard.writeText(result);
	}
	const handleSpeak = () => {
		const utterance = new SpeechSynthesisUtterance(result);
		utterance.lang = toLang;
		utterance.rate = 0.8;
		speechSynthesis.speak(utterance);
	}

	return (
		<Container fluid>
			<h1>Google Translate</h1>

			<Row>
				<Col>
					<Stack gap={2}>
						<LanguageSelector
							type={SectionType.From}
							value={fromLang}
							onChange={setFromLang}
						/>
						<TextArea
							type={SectionType.From}
							value={fromText}
							onChange={setFromText}
						/>
					</Stack>
				</Col>
				<Col xs="auto">
					<Button
						onClick={interchangeLang}
						disabled={fromLang === AUTO_LANG}
						variant="link"
					>
						<ArrowsIcon />
					</Button>
				</Col>
				<Col>
					<Stack gap={2}>
						<LanguageSelector
							onChange={setToLang}
							type={SectionType.To}
							value={toLang}
						/>
						<div style={{ position: "relative" }}>
							<TextArea
								type={SectionType.To}
								value={result}
								onChange={setResult}
								loading={loading}
							/>
							<div style={{ position: "absolute", right: 0, bottom: 0 , display: "flex"}}>
								<Button
									variant="link"
									onClick={handleClipboard}
								>
									<ClipboardIcon></ClipboardIcon>
								</Button>
								<Button
									variant="link"
									onClick={handleSpeak}
								>
									<SpeakerIcon></SpeakerIcon>
								</Button>
							</div>
						</div>
					</Stack>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
