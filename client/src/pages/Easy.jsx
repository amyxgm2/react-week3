import React, { useState } from 'react';
import '../styles/Easy.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="container">
      <h1>Simple Counter</h1>
      <p className="counter">{count}</p>
      <div className="button-group">
        <button onClick={handleDecrement} className="button">-</button>
        <button onClick={handleIncrement} className="button">+</button>
      </div>
    </div>
  );
}

export default App;