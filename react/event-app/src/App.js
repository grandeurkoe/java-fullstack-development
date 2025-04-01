import './App.css';
import { useState } from 'react';
import Users from './users';
import Product from './product'

function App() {
  let [functionName, setData] = useState("App");
  const [secondFunction, setData1] = useState(0);
  const [thirdFunction, setData2] = useState("");

  function welcome() {
    alert('Welcome to Event Handling in JS.');
  } 

  function hello() {
    setData = "hello";
    setData1(secondFunction + 1);
    setData2(document.getElementById("b1").innerText);
    alert('Hello to Event Handling in JS using ' + functionName + "() function.");
  }

  return (
    <div className="App">
      <h1>Welcome to Event Learning Application in {functionName}() function.</h1>
      <button onClick={welcome}>Welcome</button>
      <button id = "b1" onClick={hello}>Hello</button>
      <button onClick={() => {alert("Good Morning Folks!")}}>Good Morning</button>
      <p>{thirdFunction} counter: {secondFunction}</p>
      <hr/>
      <Users />
      <Product />
    </div>
  );
}

export default App;
