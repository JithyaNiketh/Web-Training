import React, { useState } from "react";

const ThemeToggler=()=>{
    const [Theme, setTheme] = useState('light')

    const toggleTheme=()=>{
        setTheme(prevTheme=>(prevTheme==='light'?'white':'light'))
    }

    return(
        <div style={{backgroundColor:Theme==='light'?'white':'light', color:Theme==='light'?'white':'light', textAlign: 'center'}}>
            <h1 style={{color:'black'}}>The current theme is {Theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );

}

export default ThemeToggler;