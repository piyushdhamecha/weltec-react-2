import { useEffect, useRef } from "react";
import Input from "../Input";

const ForwardRef = () => {
  const firstNameInputRef = useRef()

  useEffect(() => {
    firstNameInputRef.current.focus()
  }, [])

  return (
    <div>
      <div>
        <Input label="First name:" ref={firstNameInputRef} />
        {/* <label>First name:</label>
        <input ref={firstNameInputRef} /> */}
      </div>
      <div>
        <Input label="Last name:" />
      </div>
    </div>
  );
};

export default ForwardRef;
