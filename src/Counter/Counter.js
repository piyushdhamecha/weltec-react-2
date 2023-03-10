import { useState } from "react";

import CounterData from "./CounterData";
import { ContainerStyled } from "./Counter.styled";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <ContainerStyled>
      <h3>Functional component</h3>
      <CounterData count={count} />
      {/* <button onclick="onIncrementClick()" >Increment</button> */}
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
    </ContainerStyled>
  );
};

export default Counter;
