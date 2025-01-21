import { useReducer } from "react";
import { type State, type Action, Language, FromLang } from "../types";
import { AUTO_LANG } from "../constants";

// 1. Create an initialState
const initialState: State = {
	fromLang: "auto",
	toLang: "en",
	fromText: "",
	result: "",
	loading: false,
};

// 2. Create a reducer function
const reducer = (state: State, action: Action) => {
	const { type } = action;
	switch (type) {
		case "INTERCHANGE_LANG":
			if(state.fromLang === AUTO_LANG) return state
			return {
				...state,
				fromLang: state.toLang,
				toLang: state.fromLang,
			};
		case "SET_FROM_LANG":
			return {
				...state,
				fromLang: action.payload,
			};
		case "SET_TO_LANG":
			return {
				...state,
				toLang: action.payload,
			};
		case "SET_FROM_TEXT":
			return {
				...state,
				loading: true,
				fromText: action.payload,
			};
		case "SET_RESULT":
			return {
				...state,
				loading: false,
				result: action.payload,
			};
	}
	return state;
};

export const useStore = () => {
	const [{
        fromLang,
        toLang,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState);

    const interchangeLang = () => dispatch({ type: "INTERCHANGE_LANG" });
    const setFromLang = (payload: FromLang) => dispatch({ type: "SET_FROM_LANG", payload });
    const setToLang = (payload: Language) => dispatch({ type: "SET_TO_LANG", payload });
    const setFromText = (payload: string) => dispatch({ type: "SET_FROM_TEXT", payload });
    const setResult = (payload: string) => dispatch({ type: "SET_RESULT", payload });

    return {
        fromLang,
        toLang,
        fromText,
        result,
        loading,
        dispatch,
        interchangeLang,
        setFromLang,
        setToLang,
        setFromText,
        setResult,
    };
};
