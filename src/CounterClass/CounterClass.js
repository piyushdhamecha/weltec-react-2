import { Component } from "react";

import { ContainerStyled } from "../Counter/Counter.styled";
import CounterData from "../Counter/CounterData";

class CounterClass extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleIncrementClick = () => {
    console.log('increment clicked')
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrementClick = () => {
    console.log('decrement clicked')
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    console.log(this)
    return (
      <ContainerStyled>
        <h3>Class component</h3>
        <CounterData count={this.state.count} />
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
      </ContainerStyled>
    );
  }
}

export default CounterClass;
