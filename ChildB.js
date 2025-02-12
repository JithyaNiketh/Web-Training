import React from "react";

const ChildB=({count, increment, decrement})=>{
    console.log("Child B rendered");
    return(
        <div className="App">
            <div className="ChildB">
            <h1>Count:{count}</h1>
            <div>
                <button className="Buttons" onClick={increment}>Increase</button> 
                <button className="Buttons" onClick={decrement}>Decrease</button>
            </div> 
        </div>
        </div>
    )
}

export default ChildB;