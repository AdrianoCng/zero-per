import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const Board = ({ boxes, selectBox }) => {
    return (
        <div className="wrapper">
            {boxes.map((square, index) => (
                <Box
                    key={index}
                    value={square}
                    onClick={() => {
                        if (!square) {
                            selectBox(index)
                        }
                    }}
                />
            ))}
        </div>
    )
};

Board.propTypes = {
    boxes: PropTypes.array.isRequired,
    selectBox: PropTypes.func.isRequired
}

export default Board;