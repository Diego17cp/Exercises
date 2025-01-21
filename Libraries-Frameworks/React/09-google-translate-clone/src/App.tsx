/* eslint-disable react/react-in-jsx-scope */
// import { useReducer, useState } from 'react'
import { useStore } from "./hooks/useStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap";
import { AUTO_LANG } from "./constants";
import { ArrowsIcon } from "./components/Iconos";
import { LanguageSelector } from "./components/LanguageSelector";
import { SectionType } from "./types.d";

function App() {
	const { fromLang, toLang, interchangeLang, setFromLang, setToLang } =
		useStore();

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
            <Form.Control
              as="textarea"
              placeholder="Type something..."
              autoFocus
              style={{ height: 150 }}
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
            <Form.Control
              as="textarea"
              placeholder="Translate"
              style={{ height: 150 }}
            />
          </Stack>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
