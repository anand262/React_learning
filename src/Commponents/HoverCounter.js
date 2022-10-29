import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

export class HoverCounter extends Component {
  render() {
    const { count, incrementVal } = this.props;
    return <h2 onMouseOver={incrementVal}>{count}</h2>;
  }
}

export default UpdatedComponent(HoverCounter);
