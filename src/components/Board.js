import React from 'react';
import useBoard from '../hooks/useBoard';

import Box from './Box';

const Board = () => {
    const { boxes, selectBox } = useBoard();

    return (
        <div className="wrapper">
            {boxes.map((square, index) => (
                <Box
                    key={index}
                    value={square}
                    onClick={() => {
                        if (square) {
                            return
                        }
                        selectBox(index)
                    }}
                />
            ))}
        </div>
    )
}

export default Board;