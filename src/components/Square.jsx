function Square({value,
    onClick,
    isWinningSquare}){
    return(
        <button className={
            isWinningSquare?"Square winning"
            :"Square"
         } onClick={onClick}>{value}</button>
    );
}
export default Square;

