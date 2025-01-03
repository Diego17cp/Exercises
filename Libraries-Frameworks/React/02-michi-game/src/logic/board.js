import { winnerCombos } from "../constants"

export const checkWinner=(boardToCheck)=>{
    for (const [a, b, c] of winnerCombos){
        if(boardToCheck[a] && boardToCheck[a]===boardToCheck[b] && boardToCheck[a]===boardToCheck[c]){
        return boardToCheck[a]
        }
    }
    return null
}

export const checkEndGame=(boardToCheck)=>{
    return boardToCheck.every((square) => square!==null)
}