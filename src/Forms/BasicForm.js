import { useRef } from "react";

const BasicForm = () => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // const firstName = event.target[0].value;
    // const lastName = event.target[1].value;

    // const firstName = document.getElementById("firstName").value;
    // const lastName = document.getElementById("lastName").value;

    const firstName = event.target.elements.firstName.value
    const lastName = event.target.elements.lastName.value

    // const firstName = firstNameRef.current.value
    // const lastName = lastNameRef.current.value

    alert(`Welcome ${firstName} ${lastName}`);
  };

  return (
    <div>
      <h2>Basic form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First name:</label>
          <input ref={firstNameRef} />
        </div>
        <div>
          <label>Last name :</label>
          <input ref={lastNameRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
