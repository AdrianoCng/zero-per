import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ onClick, value }) => {
    return (
        <div className={`box ${value}`} onClick={onClick}></div>
    )
}

Box.defaultProps = {
    onClick: () => { },
    value: ""
}

Box.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Box;