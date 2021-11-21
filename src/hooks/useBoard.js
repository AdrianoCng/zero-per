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
    const [player1Name, setPlayer1Name] = useState("Player 1");
    const [player2Name, setPlayer2Name] = useState("Player 2");
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);
    const [isGameStarted, setIsGameStarted] = useState(false);

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
        if (!winner) {
            setBoxes(prev => {
                prev[index] = isX ? 'x' : 'o';

                return [...prev]
            });

            setIsX(prev => !prev);
        }
    }

    const restart = () => {
        setBoxes(new Array(9).fill(""));

        setScorePlayer1(0);
        setScorePlayer2(0);
        setWinner(null);
        setIsX(true);
    }

    return {
        boxes,
        selectBox,
        calculateWinner,
        winner,
        player1Name,
        player2Name,
        restart,
        isGameStarted,
        player1Name,
        player2Name,
        setPlayer1Name,
        setPlayer2Name,
        setIsGameStarted,
        scorePlayer1,
        scorePlayer2
    }
}

export default useBoard
