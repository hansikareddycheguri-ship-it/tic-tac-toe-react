import Board from "./components/Board";
import {useState,useEffect} from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
function App(){
  const[board,setBoard]=useState(Array(9).fill(""));
  const[currentPlayer,setCurrentPlayer]=useState("X");
  const[winner,setWinner]=useState(null);
  const[winningSquares,setWinningSquares]=useState([]);
  const[draw,setDraw]=useState(false);
  const[xScore,setXScore]=useState(
    Number(localStorage.getItem("xScore"))||0
  );
  const[oScore,setOScore]=useState(
    Number(localStorage.getItem("oScore"))||0
  );
 const[gameMode,setGameMode]=useState("pvp");
 const[isComputerThinking,setIsComputerThinking]=useState(false);
  useEffect(()=>{
  localStorage.setItem(
    "xScore",
    xScore
  );
localStorage.setItem(
  "oScore",
  oScore
);
},[xScore,oScore]);
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
    if(isComputerThinking){
      return;
    }
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
    setWinner(gameWinner.winner);
    setWinningSquares(gameWinner.combination);
    if(currentPlayer==="X"){
      setXScore(prev=>prev+1);
    }
    else{
      setOScore(prev=>prev+1);
    }
      return;
    }
    else if(!gameWinner && isDraw){
      setDraw(true);
      return ;
    }
    if(currentPlayer==="X"){
  setCurrentPlayer("O");
  if(gameMode==="computer"){
  setIsComputerThinking(true);
  setTimeout(()=>{
    computerMove(newBoard);
    setIsComputerThinking(false);
    setCurrentPlayer("X");
  },500);
}
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
          return {
            winner:board[a],
           combination:combination
        };
      }
    }
    return null;
  }
  function computerMove(newBoard){
    const emptySquares=newBoard.map((value,index)=>
    value===""
  ? index 
:null)
.filter(
  value=>value!==null
);
if(emptySquares.length===0){
  return;
}
const randomIndex=
Math.floor(
  Math.random()*
  emptySquares.length
);
const computerChoice=
emptySquares[randomIndex];
newBoard[computerChoice]="O";
setBoard([...newBoard]);
const gameWinner=checkWinner(newBoard);
const isDraw=newBoard.every(
  square=>square!==""
);
if(gameWinner){
  setWinner(gameWinner.winner);
  setWinningSquares(gameWinner.combination);
  setOScore(prev=>prev+1);
  return;
}
if(isDraw){
  setDraw(true);
}
  }
  function resetGame(){
    setWinningSquares([]);
  setDraw(false);
  setBoard(Array(9).fill(""));
  setCurrentPlayer("X");
  setWinner(null);
  }
 function resetScores(){
  setXScore(0);
  setOScore(0);
localStorage.removeItem("xScore");
localStorage.removeItem("oScore");
 }
return(
<div className="app-container">
  <h1>TIC-TAC-TOE</h1>
  <div className="mode-container">
    <button
    className={
      gameMode==="pvp"
      ? "active-mode"
      :""
    }
    onClick={()=>{
      setGameMode("pvp");
      resetGame();
    }}
    >
      Player vs Player
    </button>
    <button 
    className={
      gameMode==="computer"
      ? "active-mode"
      :""
    }
    onClick={()=>{
      setGameMode("computer");
      resetGame();
    }
    }>Vs Computer</button>
  </div>
<h2 className="turn-text">Current Turn:{" "}
  <span 
   className={
    currentPlayer==="X"
   ? "x-turn"
  :"o-turn"}
  >{currentPlayer}
  </span>
  </h2>
  <Scoreboard 
  xScore={xScore}
  oScore={oScore}
  />
{winner &&( 
<div className="winner-card">
    <h2 className="winner-text">Winner: {winner}</h2>
    <p className="game-over-text">
      Game Over!
    </p>
    </div>
    )}
    {draw &&( 
<div className="winner-card">
    <h2 className="draw-text">
      Draw Game!
    </h2>
    </div>
    )}
  <Board board={board} 
  handleClick={handleClick}
  winningSquares={winningSquares}/>
  <div className="button-container">
   <button 
   className="reset-btn"
    onClick={resetGame}
    >RESET</button>
    <button 
    className="reset-score-btn"
    onClick={resetScores}
    >RESET SCORES</button>
</div>
</div>
);}
export default App;