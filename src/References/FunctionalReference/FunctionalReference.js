import { useEffect, useRef } from "react";
import { FunctionalInputStyled } from "./FunctionalReference.styled";

const FunctionalReference = () => {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h3>Functional reference</h3>
      <FunctionalInputStyled ref={inputRef} />
    </div>
  );
};

export default FunctionalReference;
