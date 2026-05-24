function Scoreboard({xScore,oScore}){
    return(
        <div className="scoreboard">
        <div  className="score-card x-card">
         <h2>X</h2>
         <p>{xScore}</p>
    </div>
    <div className="score-card o-card">
        <h2>O</h2>
<p>{oScore}</p>
       </div>
       </div>
    );
}
export default Scoreboard;