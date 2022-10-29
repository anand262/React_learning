import React, { Component } from "react";

class Clickcounter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increValueC = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return <button onClick={this.increValueC}>Clcked {count} times</button>;
  }
}

export default Clickcounter2;
