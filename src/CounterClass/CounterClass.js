import { Component } from "react";

import { ContainerStyled } from "../Counter/Counter.styled";
import CounterData from "../Counter/CounterData";

class CounterClass extends Component {
  constructor() {
    console.log('Constructor method called')
    super()

    this.state = {
      counter: 0,
      isLoading: true
    }
  }

  componentDidMount() {
    console.log('ComponentDidMount method called')

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
    console.log('ComponentDidUpdate method called')

    if(this.state.counter === 10 && prevState.counter === 9) {
      this.setState({ isLoading : true })

      setTimeout(() => {
        this.setState({ isLoading: false})
      }, 3000)
    }
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount method called')
  }

  handleIncrementClick = () => {
    this.setState({ 
      counter: this.state.counter + 1 
    })
  }

  handleDecrementClick = () => {
    this.setState({ 
      counter: this.state.counter - 1 
    })
  }

  render() {
    console.log('Render method called')
    return (
      <ContainerStyled>
        {this.state.isLoading && <h4>Loading...</h4>}
        <h3>Class component</h3>
        <CounterData count={this.state.counter} />
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
      </ContainerStyled>
    );
  }
}

export default CounterClass;
