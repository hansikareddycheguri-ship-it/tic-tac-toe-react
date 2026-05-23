import Board from "./components/Board";
import {useState} from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
function App(){
  const[board,setBoard]=useState(Array(9).fill(""));
  const[currentPlayer,setCurrentPlayer]=useState("X");
  const[winner,setWinner]=useState(null);
  const[draw,setDraw]=useState(false);
  const[xScore,setXScore]=useState(0);
  const[oScore,setOScore]=useState(0);
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
  const isDraw=newBoard.every(
    (square)=>square !==""
  );
   if(gameWinner){
    setWinner(gameWinner);
    if(currentPlayer==="X"){
      setXScore(xScore+1);
    }
    else{
      setOScore(oScore+1);
    }
      return;
    }
    else if(!gameWinner && isDraw){
      setDraw(true);
      return ;
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
  function resetGame(){
  setDraw(false);
  setBoard(Array(9).fill(""));
  setCurrentPlayer("X");
  setWinner(null);
  }
 
return(
<div>
  <h1>TIC-TAC-TOE</h1>
<h2>CurrentTurn:{currentPlayer}</h2>
  
  <Scoreboard 
  xScore={xScore}
  oScore={oScore}
  />
{winner &&( 
<div style={{
  textAlign:"center",
  marginTop:"20px"
  }}>
    <h2
    style={{
      color:"green",
      fontSize:"2.5rem",
      fontWeight:"bold"
    }}>Winner: {winner}</h2>
    <p 
    style={{
      fontSize:"1.2rem",
      color:"darkred"
    }}
    >
      Game Over!
    </p>
    </div>
    )}
    {draw &&( 

    <h2
    style={{
      textAlign:"center",
      fontSize:"1.2rem",
      color:"darkred"
    }}
    >
      Draw Game!
    </h2>
    )}
  <Board board={board} handleClick={handleClick}/>
   <button onClick={()=>resetGame()}
    style={{
      marginTop:"20px",
      padding:"10px 20px",
      fontSize:"1rem",
      borderRadius:"10px",
      cursor:"pointer",
      backgroundColor:"black",
      color:"white",
      border:"none"
    }}>RESET</button>
</div>
);}
export default App;