import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import CounterClass from "./CounterClass";

function App() {
  const [showClassComponent ,setShowClassComponent] = useState(false)
  return (
    <div>
      <Counter />
      <button onClick={() => setShowClassComponent(!showClassComponent)}>
        {showClassComponent ? 'Hide': 'Show'}
      </button>
      {showClassComponent && <CounterClass />}
    </div>
  );
}

export default App;
