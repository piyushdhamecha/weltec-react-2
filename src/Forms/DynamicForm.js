import { useState } from "react";

const DynamicForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameError =
    firstName !== firstName.toLocaleLowerCase()
      ? "First name should be in lower case"
      : undefined;

  const lastNameError =
    lastName !== lastName.toLocaleLowerCase()
      ? "Last name should be in lower case"
      : undefined;

  const handleSubmit = (event) => {
    console.log(event);

    alert(`Welcome ${firstName} ${lastName}`);
  };

  return (
    <div>
      <h2>Dynamic form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First name:</label>
          <input onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div style={{ color: "red" }}>{firstNameError}</div>
        <div>
          <label>Last name :</label>
          <input onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div style={{ color: "red" }}>{lastNameError}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
