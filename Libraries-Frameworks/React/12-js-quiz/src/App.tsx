import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import { JsLogo } from "./components/JsLogo";
import { Start } from "./components/Start";


function App() {
	return (
		<main>
			<Container maxWidth="sm">
				<Stack
					direction={"row"}
					spacing={2}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<JsLogo />
					<Typography variant="h2" align="center" component={"h1"}>
						JavaScript Quiz
					</Typography>
				</Stack>

        <Start></Start>

			</Container>
		</main>
	);
}

export default App;
