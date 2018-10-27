import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
