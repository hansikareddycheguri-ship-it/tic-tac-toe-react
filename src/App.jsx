import {useState} from "react";
import "./App.css";
function App(){
  const[count,setCount]=useState(0);
  function increase(){
    setCount(count+1);
  }
  function decrease(){
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
function increase5(){
  setCount(count+5);
}
function decrease5(){
  setCount(count-5);
}
function background(){
  if(count<0){
    
  }
  else if(count>0){

  }
  else{

  }
}
  return(
    <div style={{backgroundColor:count<0?"red":"green"}}>
<h1>Counter App</h1>
<h2 >{count}</h2>
<button onClick={increase}>Increase</button>
<button onClick={decrease}>Decrease</button>
<button onClick={reset}>Reset</button>
<button onClick={increase5}>Increase5</button>
<button onClick={decrease5}>Decrease5</button>
</div>
  );
  
}
export default App;