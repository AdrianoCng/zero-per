import React, { useState } from 'react'

const useBoard = () => {
    const [boxes, setBoxes] = useState(new Array(9).fill(""));
    const [isX, setIsX] = useState(true);

    const selectBox = index => {
        setBoxes(prev => {
            prev[index] = isX ? 'x' : 'o';

            return prev
        });

        setIsX(prev => !prev);
    }

    return {
        boxes,
        selectBox
    }
}

export default useBoard
