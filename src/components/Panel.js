import React from 'react'

const Panel = ({ restart, scorePlayer1, scorePlayer2, player1Name, player2Name }) => {
    return (
        <div className="panel">
            <div className="player-score">
                <h1 className="player-name">{player1Name}</h1>
                <h1 className="score">Score: <span>{scorePlayer1}</span></h1>
            </div>

            <div className="player-score">
                <h1 className="player-name">{player2Name}</h1>
                <h1 className="score">Score: <span>{scorePlayer2}</span></h1>
            </div>

            <div className="buttons">
                <button className="button restart-button" onClick={() => {
                    restart();
                }}>Restart</button>
            </div>
        </div>
    )
}

export default Panel;
