import Square from "./Square";
function Board({board,handleClick}){
    return(
    <div  className="Board">
    {board.map((value,index)=>(
        <Square 
        key={index}
        value={value}
        onClick={()=>handleClick(index)}
        />
    ))
}
    </div>
    );
    
}
export default Board;