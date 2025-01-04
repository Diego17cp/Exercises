import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { turns } from './constants.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { checkWinner, checkEndGame } from './logic/board.js'
import { Board } from './components/Board.jsx'
import { Turns } from './components/Turns.jsx'
import { Rounds } from './components/Rounds.jsx'

export const App = () => {
  // State for the board
  const [board, setBoard]=useState(()=>{
    const boardStorage=window.localStorage.getItem('board')
    if(boardStorage) return JSON.parse(boardStorage)
    return Array(9).fill(null)
  })

  // State for the turns
  const [turn, setTurn]=useState(()=>{
    const turnStorage=window.localStorage.getItem('turn')
    if(turnStorage) return turnStorage
    return turns.X
  })

  // State for the winner
  const [winner, setWinner]=useState(null)

  // 
  const [roundsWonX, setRoundsWonX]=useState(() => {
    const roundsWonStorage=window.localStorage.getItem('roundsWonX')
    if(roundsWonStorage) return JSON.parse(roundsWonStorage)
    return 0
  })

  const [roundsWonO, setRoundsWonO]=useState(() => {
    const roundsWonStorage=window.localStorage.getItem('roundsWonO')
    if(roundsWonStorage) return JSON.parse(roundsWonStorage)
    return 0
  })

  // Reset round ONLY function
  const resetGame=()=>{
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  // Reset full game function
  const resetFullGame=()=>{
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
    setRoundsWonX(0)
    setRoundsWonO(0)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('roundsWonX')
    window.localStorage.removeItem('roundsWonO')
  }

  // Main function, update board, check winner, check end game, etc
  const updateBoard=(index)=>{
    
    // If the square is already filled or there is a winner, return
    if(board[index]||winner) return 

    // Update the board filling the square with the current turn
    const newBoard=[...board]
    newBoard[index]=turn
    setBoard(newBoard)

    // Change the turn
    const newTurn= turn===turns.X ? turns.O : turns.X
    setTurn(newTurn)

    // Save the board and the turn in localStorage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    

    // Check if there is a winner or if the game ended without a winner
    const newWinner=checkWinner(newBoard)
    if(newWinner){
      // Show confetti if there is a winner
      confetti()
      // Update the winner state
      setWinner(newWinner)
      // Update the rounds won state
      if(newWinner === turns.X) {
        setRoundsWonX(prevRounds => {
            const newRounds = prevRounds + 1
            // Guardar en localStorage dentro del callback
            window.localStorage.setItem('roundsWonX', JSON.stringify(newRounds))
            return newRounds
        })
      } else {
        setRoundsWonO(prevRounds => {
            const newRounds = prevRounds + 1
            window.localStorage.setItem('roundsWonO', JSON.stringify(newRounds))
            return newRounds
        })
      }
    } 
    // If there is no winner, check if the game ended without a winner
    else if(checkEndGame(newBoard)){
      setWinner(false)
    } 
  }
  
	return (
    <main className='board'>
			<h1>Michi Game</h1>
      <button onClick={resetGame}>Restart round</button>
      <button onClick={resetFullGame}>Restart game</button>
      <Board board={board} updateBoard={updateBoard}/>
      <Turns turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner}/>
      <Rounds roundsWonX={roundsWonX} roundsWonO={roundsWonO}/>
    </main>
	);
};
