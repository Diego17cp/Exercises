import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "todomvc-app-css/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
