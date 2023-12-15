import React, { useEffect } from 'react';
import './App.css';
//const Person = (props) => {
//  return(
//    <>
//    <h1>Name: {props.name}</h1>
//    <h1>Last Name: {props.last}</h1>
//    <h1>Age: {props.age}</h1>
//    </>
//  ) 
//}
// <h1><Person name={'baldog'} last={'badang'} age={40}/></h1> dynamic use of props

//state
import { useState } from 'react';


const App = () => {
  const name = 'John'; //dynamic 
  const isNameShowing = true;
  //{isNameShowing?name:'here'} ternary example
  // ternary if else {name? (<> code</>) : (<>code</>)} react fragment is needed to render everything 
  
  //use state
  const [counter, SetCounter] = useState(0); // counter stores the count / variable

  useEffect(()=> {
       SetCounter(100)
  },[]); // [] dependency array allows changes and initializes the set counter on the first instance

  return (
    <div className="App">
        <button onClick={()=>SetCounter((prevCount)=> prevCount-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=>SetCounter((prevCount)=> prevCount+1)}>+</button>
    </div>
  );
}

export default App;
