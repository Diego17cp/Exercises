
import "./Converter.css"
import PropTypes from 'prop-types';

export const Preview = ({markdown}) => {
    return (
        <section className="preview-container">
            <header className="bar-header">
                <h2>Preview</h2>
            </header>
            <div id="output"
            dangerouslySetInnerHTML={{__html: markdown}}></div>
        </section>
    );
}

Preview.propTypes = {
    markdown: PropTypes.string
}