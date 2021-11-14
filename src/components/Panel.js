import React from 'react'

const Panel = () => {
    return (
        <div className="panel">
            <div className="player-score">
                <h1 className="player-name">Player 1</h1>
                <h1 className="score">Score: <span>0</span></h1>
            </div>

            <div className="player-score">
                <h1 className="player-name">Player 2</h1>
                <h1 className="score">Score: <span>0</span></h1>
            </div>

            <div className="buttons">
                <button className="button restart-button">Restart</button>
            </div>
        </div>
    )
}

export default Panel;
