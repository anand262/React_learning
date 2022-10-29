import React, { Component } from "react";

export class Evenbind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = () => {
    this.setState({
      msg: "bye",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default Evenbind;
