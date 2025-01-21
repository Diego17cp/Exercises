/* eslint-disable react/react-in-jsx-scope */
// import { useReducer, useState } from 'react'
import { useStore } from "./hooks/useStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AUTO_LANG } from "./constants";
import { ArrowsIcon } from "./components/Iconos";
import { LanguageSelector } from "./components/LanguageSelector";

function App() {
	const { fromLang, toLang, interchangeLang, setFromLang, setToLang } =
		useStore();

	return (
		<Container fluid>
			<h1>Google Translate</h1>

			<Row>
				<Col>
					<h2>From</h2>
					<LanguageSelector
						type="from"
						value={fromLang}
						onChange={setFromLang}
					></LanguageSelector>
				</Col>
				<Col>
					<Button
						onClick={interchangeLang}
						disabled={fromLang === AUTO_LANG}
						variant="link"
					>
						<ArrowsIcon />
					</Button>
				</Col>
				<Col>
					<h2>to</h2>
					<LanguageSelector
						onChange={setToLang}
						type="to"
						value={toLang}
					></LanguageSelector>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
