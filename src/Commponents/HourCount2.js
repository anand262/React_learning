import React, { Component } from "react";

export class HourCount2 extends Component {
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
    return <h2 onMouseOver={this.increValueC}>{count}</h2>;
  }
}

export default HourCount2;
