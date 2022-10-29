import React, { Component } from "react";
import { Childcomp } from "./Childcomp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentname: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentname}`);
  }

  render() {
    return (
      <div>
        <Childcomp greetHandeler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComp;
