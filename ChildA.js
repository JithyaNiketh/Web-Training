import React, { memo } from "react";

const ChildA=()=>{
    console.log("Child A rendered");
    return(
        <div className="C">
            <h2>This is child A</h2>
        </div>
    )
}
export default memo(ChildA);