function Scoreboard({xScore,oScore}){
    return(
        <div 
         style={{
            display:"flex",
            justifyContent:"center",
            gap:"40px",
            margin:"20px 0px"
         }}
         >
            <h2>Score board</h2>
        <h2
        style={{
            color:"blue"
        }}>X Score:{xScore}</h2>
         <h2
        style={{
            color:"red"
        }}>O Score:{oScore}</h2>
       </div>
    );
}
export default Scoreboard;