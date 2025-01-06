import PropTypes from 'prop-types';
import "./Converter.css"

export const Editor = ({handleConvert, value}) => {
	return (
		<section className="editor-container">
            <header className="bar-header">
                <h2>Editor</h2>
            </header>
			<textarea
				name="editor"
				id="editor"
				placeholder="Type your markdown here..."
                onChange={handleConvert}
				value={value}
			></textarea>
		</section>
	);
};

Editor.propTypes = {
    handleConvert: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}
