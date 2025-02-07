import React from "react";
const FruitList=()=>{
    const fruits = ['apple','cherry','orange','grapes'];
    return(
        <div>
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default FruitList;