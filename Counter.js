import React, { useState } from "react";

const Counter=()=>{
    const [count, setCount]=useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <button className="" onClick={()=>setCount(count+1)}>Increase</button>
            <button className="" onClick={()=>setCount(count+-1)}>Decrease</button>
        </div>
    )

}

export default Counter;