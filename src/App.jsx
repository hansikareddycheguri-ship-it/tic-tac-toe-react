import Board from "./components/Board";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
function App(){
return(
<div>
  <h1>TIC-TAC-TOE</h1>
  <Scoreboard />
  <Board />
</div>
);
}
export default App;