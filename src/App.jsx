import React, {useEffect, useState} from 'react';
import SquareComponent from "./components/SquareComponent";

/* empty board */
const initialBoard = ["", "", "", "", "", "", "", "", "", ""];

function App() {

    /* useState */
    const [gameState, setGameState] = useState(initialBoard) //initialises the board as empty
    const [playerX, setPlayerX] = useState(false) // 0 starts the game

    /* functions */
    const onUserClicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = playerX ? "X" : "0";
        setPlayerX(!playerX)
        setGameState(strings)
    }

    /* Function to clear the game */
    const clearGame = () => {
        setGameState(initialBoard)
    }

    /* useEffect to check winner constantly */
    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            clearGame();
            alert(`${winner} is the winner!`)
        } 
    }, [gameState])

    /* Function to check who is the winner */
    const checkWinner = () => {
        /* possible matching lines */
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    return (
        <div className="app-header">
            <p className="heading-text">React Tic Tac Toe Project</p>
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(0)} state={gameState[0]}/>
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(1)} state={gameState[1]}/>
                <SquareComponent className="b-bottom" onClick={() => onUserClicked(2)} state={gameState[2]}/>
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(3)} state={gameState[3]}/>
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]}/>
                <SquareComponent className="b-bottom" onClick={() => onUserClicked(5)} state={gameState[5]}/>
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-right" onClick={() => onUserClicked(6)} state={gameState[6]}/>
                <SquareComponent className="b-right" onClick={() => onUserClicked(7)} state={gameState[7]}/>
                <SquareComponent onClick={() => onUserClicked(8)} state={gameState[8]}/>
            </div>
            <button className="clear-button" onClick={clearGame}>Clear Game</button>
        </div>
    );
}

export default App;