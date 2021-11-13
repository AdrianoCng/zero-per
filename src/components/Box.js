import React from 'react';
import PropTypes, { bool, string } from 'prop-types';

const Box = ({ onClick, value }) => {
    return (
        <div className={`box ${value}`} onClick={onClick}></div>
    )
}

Box.defaultProps = {
    turn: false,
    onClick: () => { }
}

Box.propTypes = {
    turn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

export default Box;