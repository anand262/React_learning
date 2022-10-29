import React, { Component } from "react";
import Purecomp from "./Purecomp";
import RegComp from "./RegComp";

export class Paren extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anand",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Anand",
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        Paren
        <br />
        <RegComp name={this.state.name} />
        <br />
        <Purecomp name={this.state.name} />
      </div>
    );
  }
}

export default Paren;
