import { useState } from "react";

const ControlledComponent = () => {
  const [firstName, setFirstName] = useState();

  const handleInputChange = (e) => {
    setFirstName(e.target.value.toUpperCase());
  };

  const handleSubmit = () => {
    alert(firstName)
  }

  console.log(firstName)

  return (
    <div>
      <h3>Controlled component</h3>
      <label htmlFor="firstName">First name:</label>
      <input
        id="firstName"
        placeholder="first name"
        onChange={handleInputChange}
        value={firstName}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ControlledComponent;
