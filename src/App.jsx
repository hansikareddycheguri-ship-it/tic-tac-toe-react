import Board from "./components/Board";
import {useState} from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
function App(){
  const[board,setBoard]=useState(Array(9).fill(""));
  const[currentPlayer,setCurrentPlayer]=useState("X");
  const[winner,setWinner]=useState(null);
  const winningCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  
  function handleClick(index){
    if(winner){
    return;
  }
  if(board[index]!==""){
    return ;
  }
   const newBoard=[...board]; 
newBoard[index]=currentPlayer;
 
   setBoard(newBoard);
  const gameWinner=checkWinner(newBoard);
  
   if(gameWinner){
    setWinner(gameWinner);
      return;
    }
    if(currentPlayer==="X"){
setCurrentPlayer("O");
  }
  else{
    setCurrentPlayer("X");
  }

}
function checkWinner(board){
      for(let combination of winningCombinations){
        const[a,b,c]=combination;
        if(
          board[a] && 
          board[a] === board[b] &&
          board[a] === board[c]
        )
        {
          return board[a];
        }
      }
    return null;
  }
return(
<div>
  <h1>TIC-TAC-TOE</h1>
<h2>CurrentTurn:{currentPlayer}</h2>
  
  <Scoreboard />
{winner && <h2>Winner: {winner}</h2>}
  <Board board={board} handleClick={handleClick}/>
</div>
);


}

export default App;