import { useState } from "react";

const ControlledForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    console.log(event);

    alert(`Welcome ${firstName} ${lastName}`)
  };

  return (
    <div>
      <h2>Controlled form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First name:</label>
          <input onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last name :</label>
          <input onChange={(e) => setLastName(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
