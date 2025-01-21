/* eslint-disable react/react-in-jsx-scope */
import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
    type: SectionType
    loading?: boolean, 
    onChange: (value: string) => void, 
    value: string,
} 

const commonStyles = {
    height: 200,
    border: 0,
    resize: "none"
}
const getPlaceholder = ({ type, loading }:{ type: SectionType, loading?: boolean }) => {
    if (type === SectionType.From) return "Type something..."
    if(loading===true) return "Translating..."
    return "Translate"
}

export const TextArea = ({ type, loading, value, onChange  }: Props) => {
	
    const styles = type === SectionType.To 
        ? { ...commonStyles, backgroundColor: "#f5f5f5" }
        : commonStyles
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }

    return (
		<Form.Control
            autoFocus={type===SectionType.From? true : false}
			as="textarea"
			placeholder={getPlaceholder({type, loading})}
			style={styles}
            value={value}
            onChange={handleChange}
            disabled={type===SectionType.To}
		/>
	);
};
