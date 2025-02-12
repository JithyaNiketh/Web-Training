import React from "react";

const Welcome = (props)=>{
    const{name, greeting}=props

    return(
        <div className="message">
            <h1>{greeting},{name}</h1>
        </div>
    )
}

export default Welcome;
