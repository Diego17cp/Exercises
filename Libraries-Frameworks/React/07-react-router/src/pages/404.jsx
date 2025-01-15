import { Link } from "../components/Link";

export const Page404 = () => {
	return (
		<>
			<div>
				<h1>Page not found</h1>
				<img
					src="https://midu.dev/images/this-is-fine-404.gif"
					alt="Gif del perro de This is Fine quemándose vivo"
				/>
			</div>
            <Link to='/'>Come back to home</Link>
		</>
	);
};
