import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { turns } from './constants.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { checkWinner, checkEndGame } from './logic/board.js'

export const App = () => {
  const [board, setBoard]=useState(()=>{
    const boardStorage=window.localStorage.getItem('board')
    if(boardStorage) return JSON.parse(boardStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn]=useState(()=>{
    const turnStorage=window.localStorage.getItem('turn')
    if(turnStorage) return turnStorage
    return turns.X
  })
  const [winner, setWinner]=useState(null)

  const resetGame=()=>{
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard=(index)=>{
    if(board[index]||winner) return 
    const newBoard=[...board]
    newBoard[index]=turn
    setBoard(newBoard)

    const newTurn= turn===turns.X ? turns.O : turns.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    
    const newWinner=checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } 
    else if(checkEndGame(newBoard)){
      setWinner(false)
    } 
  }
  
	return (
    <main className='board'>
			<h1>Michi Game</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn===turns.X} >
          {turns.X}
        </Square>
        <Square isSelected={turn===turns.O} >
          {turns.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
	);
};
