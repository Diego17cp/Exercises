import PropTypes from 'prop-types'

export const Square=({children, updateBoard, index, isSelected}) => {
    const className=`square ${isSelected ? 'is-selected' : ''}`
    const handleClick=()=>{
        updateBoard(index)
    }
    return (
        <div className={className} onClick={handleClick}>
        {children}
        </div>
    )
}

Square.propTypes={
    children: PropTypes.node,
    updateBoard: PropTypes.func,
    index: PropTypes.number,
    isSelected: PropTypes.bool
}