import { Children, useEffect, useState } from "react";
import { NAVIGATION_EVENTS } from "../constants/consts";
import { match } from "path-to-regexp";
import { getCurrentPath } from "../utils";
export const Router = ({
	routes = [],
	defaultComponent: DefaultComponent = () => <h1>404</h1>,
	children,
}) => {
	const [currentPath, setCurrentPath] = useState(getCurrentPath());
	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(getCurrentPath());
		};
		window.addEventListener(NAVIGATION_EVENTS.PUSHSTATE, onLocationChange);
		window.addEventListener(NAVIGATION_EVENTS.POPSTATE, onLocationChange);
		return () => {
			window.removeEventListener(
				NAVIGATION_EVENTS.PUSHSTATE,
				onLocationChange
			);
			window.removeEventListener(
				NAVIGATION_EVENTS.POPSTATE,
				onLocationChange
			);
		};
	}, []);
	let routeParams = {};

    const routesFromChildren = Children.map(
        children, ({ props, type }) => {
            const { name } = type;
            const isRoute = name === 'Route';

            return isRoute? props : null
        }
    )

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

	const Page = routesToUse.find(({ path }) => {
		if (path === currentPath) return true;
		const matcherUrl = match(path, { decode: decodeURIComponent });
		const matched = matcherUrl(currentPath);
		if (!matched) return false;

		routeParams = matched.params;
		return true;
	})?.Component;
	return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />;
};
