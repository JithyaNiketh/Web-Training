// import React, { useState } from "react";
// import './App.css';
//import CounterWithPrev from "./Components/CounterWithPrev";
//import Welcome from './Components/Welcome';
//import Greeting from "./Components/Greeting";
//import Fruitlist from "./Components/FruitList";
//import Counter from "./Components/Counter";
//import ThemeToggler from "./Components/ThemeToggler";
//import ChildA from "./Components/ChildA";
//import ChildB from "./Components/ChildB";

// const Welcome=()=> <h1 className="message">Hello Jithya</h1>

// function App() {
//   return(
//     <div className="App">
//       <Welcome />
      
//     </div>
//   )
// }
// export default App;


//const App=()=>{
//  return(
//    <div style={{textAlign:'center', color: 'red', background:'black', height:'100vh', padding:'40px'}}>
//        <Welcome name='Jithya' greeting='Hello'></Welcome>
//    </div>
//  );
//}

//function App(){
//  const isLoggedIn = false;
//  return(
//    <div className="App">
//      <div className="Greeting">
//      <Greeting isLoggedIn={true}></Greeting>
//    </div>
//    </div>
//  );
//}

// const App=()=>{
//   return(
//     <div className="App">
//       <div className="Fr">
//         <Fruitlist/>
//       </div>
//     </div>
//   )
// }


// const App=()=>{
//   return(
//     <div className="App">
//       <div className="Counter">
//         <Counter/>
//       </div>
//     </div>
//   )
// }

// const App=()=>{
//     return(
//       <div className="App">
//         <div className="ThemeToggler">
//           <ThemeToggler/>
//         </div>
//       </div>
//     )
//    }

// import {useState} from "react";
// import "./App.css";


// const Parent=()=>{
//     const[count, setCount]=useState(0);
//     const increment =()=>{
//         setCount(c=>c+1);
//     };

//     const decrement=()=>{
//         setCount(c=>c-1);
//     };
//     return(
//         <div className="App">
//             <ChildA/>
//             <ChildB count={count} increment={increment} decrement = {decrement} />
//         </div>
//     )
// }
// export default Parent;



// import { ListProvider } from './Components/ListContext';
// import AddItem from './Components/AddItem';
// import ItemList from './Components/ItemList';

// const App = () => {
//   return (
//     <ListProvider>
//      <div className="App">
//         <div className="IMA">
//             <h1>Item Management App</h1>
//             <br></br>
//             <AddItem />
//             <br></br>
//             <ItemList />
//         </div>
//      </div>
//     </ListProvider>
//   );
// };

// export default App;



// const App = () =>{
//     return(
//         <div>
//             <CounterWithPrev/>
//         </div>
//     );
// }

// export default App;


// function App(){
//     const handleClick=()=>{
//         alert("Button Clicked.");
//     };
//     return(
//         <div className="App" style={{alignSelf:'center'}} >
//             <button onClick={handleClick}>Sample Button</button>
//         </div>
//     )
// }

// export default App;

// function App(){
//     const [text, setText] = useState("");
//     const handleChange = (event)=>{
//         setText(event.target.value);
//     }

//     return(
//         <div className="HC">
//             <input style={{marginTop:'10vh'}} type="text" value={text} onChange={handleChange}></input>
//             <p>Your text: {text}</p>
//         </div>
//     )
// }

// function App(){
//     const [isHovered, setIsHovered] = useState(false);

//     const handleMouseEnter=()=>{
//         setIsHovered(true);
//     }

//     const handleMouseLeave = () =>{
//         setIsHovered(false);
//     }

//     return(
//         <div className="MH">
//             <button 
//             className="MHB"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             style={{backgroundColor: isHovered ? "black" : "lightgray", color : isHovered ? "white" : "black", marginTop:'30px'}}>
//                 Sample Hover Button
//             </button>

//             {isHovered && <p>Mouse is over the button</p>}
//         </div>
//     )
// }

import React,{ useState } from "react";
import "./App.css"
function App(){

  const[key, setKey]=useState("");

  const handleKeyDown=(event)=>{
    setKey(event.key);
  }

  return(
    <div className="KD">
      <h1>Welcome to Keyboard!</h1>
      {key && <h2>Pressed key : {key}</h2>}
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press any key"/>
    </div>
    )
}

export default App;