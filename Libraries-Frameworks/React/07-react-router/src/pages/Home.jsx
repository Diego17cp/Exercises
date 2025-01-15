import { Link } from "../components/Link";
const HomePage = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<p>Esta es una pagina de ejemplo</p>
			<Link to="/about">Sobre Nosotros</Link>
		</div>
	);
};
export default HomePage;