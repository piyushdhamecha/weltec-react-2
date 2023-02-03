import { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showComponent, setShowComponent] = useState(false)

  const handleButtonClick = () => {
    setShowComponent(!showComponent)
  }
  
  return (
    <div>
      <button onClick={handleButtonClick}>{showComponent? 'Hide': 'Show'}</button>
      {showComponent && <ProductList />}
    </div>
  );
}

export default App;
