/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Form } from "react-bootstrap";
import { AUTO_LANG, SUPPORTED_LANGUAGES } from "../constants";
import { type FromLang, type Language, SectionType } from "../types.d";

type Props =
	| { type: SectionType.From; value: FromLang; onChange: (lang: FromLang) => void }
	| { type: SectionType.To; value: Language; onChange: (lang: Language) => void };

export const LanguageSelector: React.FC<Props> = ({
	onChange,
	type,
	value,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value as Language);
	};

	return (
		<Form.Select
			aria-label="Select a language"
			onChange={handleChange}
			value={value}
		>
            {
                type === SectionType.From && <option value={AUTO_LANG}>Detect language</option>
            }
			{Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
				<option key={key} value={key}>
					{literal}
				</option>
			))}
		</Form.Select>
	);
};
