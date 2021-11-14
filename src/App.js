import React, { useEffect } from 'react';
import Board from './components/Board';
import Panel from './components/Panel';
import useBoard from './hooks/useBoard';

const App = () => {
    const { boxes, selectBox, calculateWinner } = useBoard();

    useEffect(() => {
        calculateWinner()
    }, [boxes]);

    return (
        <div className="container grid">
            <Panel />
            <Board
                boxes={boxes}
                selectBox={selectBox}
            />
        </div>
    )
}

export default App
