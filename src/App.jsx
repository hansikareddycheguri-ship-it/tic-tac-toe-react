import Board from "./components/Board";
import {useState} from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
function App(){
  const[board,setBoard]=useState(Array(9).fill(""));
  const[currentPlayer,setCurrentPlayer]=useState("X");
  
  
  function handleClick(index){
    
  if(board[index]!==""){
    return ;
  }
const newBoard=[...board];
newBoard[index]=currentPlayer;
setBoard(newBoard);

  if(currentPlayer==="X"){
setCurrentPlayer("O");
  }
  else{
    setCurrentPlayer("X");
  }
}
return(
<div>
  <h1>TIC-TAC-TOE</h1>
  <Scoreboard />
  <Board board={board} handleClick={handleClick}/>
</div>
);
}



export default App;