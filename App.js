import React from "react";
import './App.css';
//import Welcome from './Components/Welcome';
//import Greeting from "./Components/Greeting";
import Fruitlist from "./Components/FruitList";

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

const App=()=>{
  return(
    <div className="App">
      <div className="Fr">
        <Fruitlist/>
      </div>
    </div>
  )
}



export default App;