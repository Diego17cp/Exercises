import PropTypes from 'prop-types';

export const Pointer = ({positionX, positionY}) => {
    return (
        <div className='tracker' style={{
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            width: 40,
            height: 40,
            opacity: 0.8,
            pointerEvents: 'none',
            left: -25,
            top: -25,
            transform: `translate(${positionX}px, ${positionY}px)`
        }}></div>
    )
}

Pointer.propTypes = {
    positionX: PropTypes.number.isRequired,
    positionY: PropTypes.number.isRequired
}