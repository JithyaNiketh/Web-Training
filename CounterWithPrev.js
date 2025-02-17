import React,{useState,useEffect,useRef} from "react";

function CounterWithPrev(){
  const[count,setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(()=>{
    prevCountRef.current = count;
  },[count]);

  return(
    <div>
      <p>Count: {count}</p>
      <p>Prev Count: {prevCountRef.current}</p>
      <button style={{margin:'10px'}} onClick={() => setCount(count + 1)}>Increase</button>
      <br></br>
      <button style={{margin:'10px'}} onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default CounterWithPrev;