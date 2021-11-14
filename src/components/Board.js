import React, { useEffect } from 'react';
import useBoard from '../hooks/useBoard';

import Box from './Box';

const Board = () => {
    const { boxes, selectBox, calculateWinner, winner } = useBoard();

    useEffect(() => {
        calculateWinner()
    }, [boxes]);

    return (
        <div className="wrapper">
            {boxes.map((square, index) => (
                <Box
                    key={index}
                    value={square}
                    onClick={() => {
                        if (square || winner) {
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