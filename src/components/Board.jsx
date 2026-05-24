import Square from "./Square";
function Board({
    board,
    handleClick,
    winningSquares
}){
    return(
     <div  className="Board">
     {board.map((value,index)=>{
   
     const isWinningSquare =winningSquares.includes(index);
   
    return(
        <Square 
        key={index}
        value={value}
        onClick={()=>handleClick(index)}
        isWinningSquare={isWinningSquare}
        />
    );
})}
    </div>
    );
    
}
export default Board;