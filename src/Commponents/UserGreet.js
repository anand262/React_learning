import React, { Component } from "react";

export class UserGreet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoog: false,
    };
  }
  render() {
    return this.state.isLoog ? <div>Hello</div> : <div>Bye</div>;
    /* if (this.state.isLoog) {
      return <div>wlcm</div>;
    } else {
      return <div>welcome bro</div>;
    }*/
    /*return (
      <div>
        <div>Wlcm</div>
        <div>Wlcm</div>
      </div>
    );*/
  }
}

export default UserGreet;
