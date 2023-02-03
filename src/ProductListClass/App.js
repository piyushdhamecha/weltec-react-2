import { useState } from "react";
import ProductListClass from "./ProductListClass";

function App() {
  const [showComponent, setShowComponent] = useState(false)

  const handleButtonClick = () => {
    setShowComponent(!showComponent)
  }
  
  return (
    <div>
      <button onClick={handleButtonClick}>{showComponent? 'Hide': 'Show'}</button>
      {showComponent && <ProductListClass />}
    </div>
  );
}

export default App;
