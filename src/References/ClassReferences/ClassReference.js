import { Component, createRef } from "react";
import { ClassInputStyled } from "./ClassReference.styled";

class ClassReference extends Component {
  constructor() {
    super();

    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <h3>Class reference </h3>
        <ClassInputStyled ref={this.inputRef} type="text" />
      </div>
    );
  }
}

export default ClassReference;
