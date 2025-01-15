import { lazy, Suspense } from "react";
import "./App.css";
// import AboutPage from "./pages/About";  import estatico
// import dinamico
import HomePage from "./pages/Home";
const AboutPage = lazy(() => import('./pages/About.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const Page404 = lazy(() => import('./pages/404.jsx'))

import { Router } from "./components/Router";
import { Route } from "./components/Route";

const appRoutes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  }, 
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

	return (
		<main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/about' Component={AboutPage}></Route>
        </Router>
      </Suspense>
		</main>
	);
}

export default App;
