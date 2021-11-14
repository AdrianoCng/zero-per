import React, { useEffect } from 'react';
import Board from './components/Board';
import Panel from './components/Panel';
import useBoard from './hooks/useBoard';

const App = () => {
    const { boxes, selectBox, calculateWinner, restart } = useBoard();

    useEffect(() => {
        calculateWinner()
    }, [boxes]);

    return (
        <div className="container grid">
            <Panel
                restart={restart}
            />
            <div className="wrapper">
                <Board
                    boxes={boxes}
                    selectBox={selectBox}
                />
            </div>
        </div>
    )
}

export default App
