import React, { useState } from "react";
import Containers from "../Containers/Containers";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  // increment counter
  const incrementHandler = () => {
    setCount(count + 1);
  };

  // decrement counter
  const decrementHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // reset counter
  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Containers
        counterValue={count}
        incrementCounter={incrementHandler}
        decrementCounter={decrementHandler}
        resetCounter={resetHandler}
      />
    </div>
  );
}

export default App;
