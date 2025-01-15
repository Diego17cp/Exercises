import { NAVIGATION_EVENTS } from "../constants/consts";

export const navigate = (href) => {
	window.history.pushState({}, "", href);
	const navigationEvent = new Event(NAVIGATION_EVENTS.PUSHSTATE);
	window.dispatchEvent(navigationEvent);
};

export const Link = ({ target, to, ...props }) => {
	const handleClick = (event) => {
        
        const isMainEvent = event.button === 0
        const isModifiedEvent = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
        const isManageableEvent = target === undefined || target === '_self'
        
        if(isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault();
            navigate(to);
        }
    };

	return <a href={to} onClick={handleClick} target={target} {...props}></a>;
};
