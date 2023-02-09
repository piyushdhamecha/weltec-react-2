import { forwardRef } from "react";
import { InputStyled } from "./Input.styled";

const Input = forwardRef(({ label }, ref) => {
  console.log(ref);
  return (
    <div>
      <label>{label}</label>
      <InputStyled ref={ref} />
    </div>
  );
})

export default Input;
