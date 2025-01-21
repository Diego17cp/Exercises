/* eslint-disable react/react-in-jsx-scope */
// import { useReducer, useState } from 'react'
import { useStore } from "./hooks/useStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { AUTO_LANG } from "./constants";
import { ArrowsIcon } from "./components/Iconos";
import { LanguageSelector } from "./components/LanguageSelector";
import { SectionType } from "./types.d";
import { TextArea } from "./components/TextArea";

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
    loading
	} = useStore();

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
						<TextArea
							type={SectionType.To}
							value={result}
              onChange={setResult}
              loading={loading}
						/>
					</Stack>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
