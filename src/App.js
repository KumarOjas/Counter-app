import React, { useState } from 'react';
import './App.css';

function App() {
  // State variable to track the counter value
  const [counter, setCounter] = useState(0);

  // Function to increase the counter
  const increment = () => setCounter(counter + 1);

  // Function to decrease the counter
  const decrement = () => setCounter(counter - 1);

  // Function to reset the counter to 0
  const reset = () => setCounter(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-container">
        <h2>{counter}</h2>
        <div className="buttons">
          <button onClick={increment}>Increase</button>
          <button onClick={decrement}>Decrease</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
