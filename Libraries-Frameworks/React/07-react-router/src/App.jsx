import { Router } from "./components/Router";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { Page404 } from "./pages/404";
import { SearchPage } from "./pages/Search";
import { Route } from "./components/Route";

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

	return (
		<main>
			<Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/about' Component={AboutPage}></Route>
      </Router>
		</main>
	);
}

export default App;
