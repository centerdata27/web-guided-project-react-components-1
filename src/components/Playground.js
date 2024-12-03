/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, { useState } from "react";

function Playground(props) {     
  const [count, setCount] = useState(0); // Create a slice of state
  const [spinnerOn, setSpinnerOn] = useState(false); // Create another slice of state
  const [weapon, setWep] = useState("sissors"); // Create a third slice of state

  if (spinnerOn) {
    return (
      <div className="container">
        <h3>The Spinner is {spinnerOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setSpinnerOn(false)}>Turn Off Spinner</button>
      </div>
    );
  }

  return(  
    <div>
      <h1>PLAYGROUND</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h3>The spinner is {spinnerOn ? "ON" : "OFF"}</h3>
      <button onClick={() => setSpinnerOn(!spinnerOn)}>Toggle Spinner</button>


      
      <h3>The current weapon is {weapon}</h3>
      <button onClick={() => setWep("sissors")}>Sissors</button>
      <button onClick={() => setWep("rock")}>Rock</button>
      <button onClick={() => setWep("paper")}>Paper</button>
    </div>
  );
} 

export default Playground; // export the component so it can be imported in other files