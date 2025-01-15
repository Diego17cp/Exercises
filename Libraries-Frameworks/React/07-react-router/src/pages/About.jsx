import { Link } from "../components/Link";

const i18n = {
	es: {
		title: "Sobre nosotros",
		desc: "Hola, soy Diego y este es mi clon de React Router",
		btn: "Volver al inicio",
	},
	en: {
		title: "About us",
		desc: "Hello, I'm Diego and this is my React Router clone",
		btn: "Go back to home",
	},
};

const useI18n = (lang) => {
	return i18n[lang] || i18n.en;
}

const AboutPage = ({ routeParams }) => {
	const i18n = useI18n(routeParams.lang ?? 'en');
	return (
		<div>
			<h1>{i18n.title}</h1>
			<p>{i18n.desc}</p>
			<Link to="/">{i18n.btn}</Link>
		</div>
	);
};
export default AboutPage;
