import PropTypes from 'prop-types';
import "./Modal.css";

export const ExamplesModal = ({opacity, handleClose }) => {
    return (
        <div className="examples" style={{opacity: opacity, pointerEvents: opacity ? "auto" : "none"}}>
            <h2>Examples</h2>
            <div className="examples-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <div className="example">
                    <h3>Headers</h3>
                    <p># This is a Title</p>
                    <p>## This is a Subtitle</p>
                    <p>### And we&apos;ll see more examples</p>
                </div>
                <div className="example">
                    <h3>Emphasis</h3>
                    <p>*This text will be italic*</p>
                    <p>_This text will be italic_</p>
                    <p>**This text will be bold**</p>
                    <p>__This text will be bold__</p>
                    <p>**_This text will be italic and bold_**</p>
                    <p>~~This text will be crossed out~~</p>
                </div>
                <div className="example">
                    <h3>Lists</h3>
                    <p>1. First ordered list item</p>
                    <p>2. Another item</p>
                    <p>* Unordered List.</p>
                    <p>- Unordered List</p>
                    <p>* Unordered item</p>
                    <p>- And another item.</p>
                </div>
                <div className="example">
                    <h3>Links</h3>
                    <p>[This is a link](https://www.freecodecamp.org/)</p>
                </div>
                <div className="example">
                    <h3>Images</h3>
                    <p>![This is an image](https://via.placeholder.com/150)</p>
                </div>
                <div className="example">
                    <h3>Blockquotes</h3>
                    <p>&gt; This is a blockquote (Not Supported) </p> 
                </div>
                <div className="example">
                    <h3>Code</h3>
                    <p>`This is an inline code`</p>
                    <p>```</p>
                    <p>console.log(&apos;This is a code block&apos;);</p>
                    <p>```</p>
                </div>
            </div>
        </div>
    );
}

ExamplesModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    opacity: PropTypes.number.isRequired
}