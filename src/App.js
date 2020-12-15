import React, { useState }  from "react";
import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const handleIncrement = () => {
		setCount(p => p + 1);
		
	  };
	  const handleDecrement = () => {
		setCount(p => p - 1);
	  };
	  const handleReset = ()=>{
		setCount(p=>p=0)
	  }
	  

  return (
    <div className="App">
		<Counter 
		increament={handleIncrement} 
		value = {count} 
		decrement={handleDecrement}
		set = {handleReset}
		/>

    </div>
  );
}

export default App;