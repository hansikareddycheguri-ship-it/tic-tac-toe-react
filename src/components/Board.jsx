import Square from "./Square";
function Board(){
    return(
    <div className="Board">
       
        <Square value="X"/>
        <Square value="O"/>
        <Square value=""/>
     
        <Square value="X"/>
        <Square value="O"/>
        <Square value=""/>
     
        <Square value="X"/>
        <Square value="O"/>
        <Square value=""/>
     </div>
    );
    
}
export default Board;