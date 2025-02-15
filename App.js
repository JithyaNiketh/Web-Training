import React from "react";
import './App.css';
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



import { ListProvider } from './Components/ListContext';
import AddItem from './Components/AddItem';
import ItemList from './Components/ItemList';

const App = () => {
  return (
    <ListProvider>
     <div className="App">
        <div className="IMA">
            <h1>Item Management App</h1>
            <br></br>
            <AddItem />
            <br></br>
            <ItemList />
        </div>
     </div>
    </ListProvider>
  );
};

export default App;