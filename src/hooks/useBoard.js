import { useState } from 'react';

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

const useBoard = () => {
    const [boxes, setBoxes] = useState(new Array(9).fill(""));
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState(null);

    const calculateWinner = () => {
        for (let i = 0; i < winningCombinations.length; i++) {
            const [firstIndex, secondIndex, thirdIndex] = winningCombinations[i];

            if (boxes[firstIndex] && boxes[firstIndex] === boxes[secondIndex] && boxes[firstIndex] === boxes[thirdIndex]) {
                setWinner(boxes[firstIndex]);
                break;
            }
        }
    };

    const selectBox = index => {
        setBoxes(prev => {
            prev[index] = isX ? 'x' : 'o';

            return [...prev]
        });

        setIsX(prev => !prev);
    }

    return {
        boxes,
        selectBox,
        calculateWinner,
        winner,
    }
}

export default useBoard
