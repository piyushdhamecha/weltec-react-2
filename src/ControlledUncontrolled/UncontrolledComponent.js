import { useRef } from "react";

const UncontrolledComponent = () => {
  const firstNameRef = useRef()

  const handleSubmit = () => {
    alert(firstNameRef.current.value)
  }

  return (
    <div>
      <h3>Uncontrolled component</h3>
      <label htmlFor="firstName">First name:</label>
      <input id="firstName" placeholder="first name" ref={firstNameRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UncontrolledComponent;
