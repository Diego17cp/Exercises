import PropTypes from 'prop-types';
import "./Modal.css";

export const ButtonShowModal = ({handleClick}) => {
    return (
        <button onClick={handleClick} className="btn-show-modal">Examples</button>
    )
}

ButtonShowModal.propTypes = {
    handleClick: PropTypes.func.isRequired
}