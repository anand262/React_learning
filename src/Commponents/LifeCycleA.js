import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anand",
    };
    console.log("Lifecycle constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A  getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("Lifecycle A  componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Shinde",
    });
  };
  render() {
    console.log("Lifecycle render");
    return (
      <div>
        Lifestyle A<button onClick={this.changeState}>click here</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
