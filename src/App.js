import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import Panel from './components/Panel';
import useBoard from './hooks/useBoard';
import Modal from './components/Modal';

const App = () => {
    const {
        boxes,
        selectBox,
        calculateWinner,
        restart,
        isGameStarted,
        player1Name,
        player2Name,
        setPlayer1Name,
        setPlayer2Name,
        scorePlayer1,
        scorePlayer2,
        setIsGameStarted
    } = useBoard();

    const [tempPlayer1Name, setTempPlayer1Name] = useState("");
    const [tempPlayer2Name, setTempPlayer2Name] = useState("");

    useEffect(() => {
        calculateWinner()
    }, [boxes]);

    const renderModal = () => {
        return (
            <Modal
                open={!isGameStarted}
                className={'modal'}
            >
                <form className="set-name-form" onSubmit={e => {
                    e.preventDefault();
                    setPlayer1Name(tempPlayer1Name);
                    setPlayer2Name(tempPlayer2Name);
                    setIsGameStarted(true);
                }}>
                    <label className='label' htmlFor='player1-name'>Player 1:</label>
                    <input
                        type='text'
                        id='player1-name'
                        className='input'
                        value={tempPlayer1Name}
                        onChange={(e) => setTempPlayer1Name(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />

                    <label className='label' htmlFor='player1-name'>Player 2:</label>
                    <input
                        type='text'
                        id='player1-name'
                        className='input'
                        value={tempPlayer2Name}
                        onChange={(e) => setTempPlayer2Name(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                    <button className='button small'>Confirm</button>
                </form>
            </Modal>
        )
    }

    return (
        <div className="container grid">
            <Panel
                restart={restart}
                scorePlayer1={scorePlayer1}
                scorePlayer2={scorePlayer2}
                player1Name={player1Name}
                player2Name={player2Name}
            />
            <div className="wrapper">
                <Board
                    boxes={boxes}
                    selectBox={selectBox}
                />
            </div>

            {renderModal()}
        </div>
    )
}

export default App
