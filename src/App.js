import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){

const [isRed, setRed] = useState(false);
const [count, setCount] = useState(0);
const increment = () => {
  setCount(count+1);
  setRed(!isRed);
}  
  return(
    <div className="app">
      <h1 className={isRed ? 'red':'blue'}>change my color</h1>
      <button onClick={increment}>Increment</button>
      <h3>{count}</h3>
    </div>
  );
}

export default App;