import React from 'react';
import Box from './Box';

const boxes = new Array(9).fill();

const Board = () => {
    return (
        <div className="wrapper">
            {boxes.map((_, index) => (
                <Box key={index} />
            ))}
        </div>
    )
}

export default Board;