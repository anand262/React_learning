import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { count, incrementVal } = this.props;
    return <button onClick={incrementVal}>{count} Times</button>;
  }
}

export default UpdatedComponent(ClickCounter);
