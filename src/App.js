import React from 'react';
import Board from './components/Board';
import Panel from './components/Panel';

const App = () => {
    return (
        <div className="container grid">
            <Panel />
            <Board />
        </div>
    )
}

export default App
