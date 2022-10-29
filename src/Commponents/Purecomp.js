import React, { PureComponent } from "react";

export class Purecomp extends PureComponent {
  render() {
    return <div>Purecomp {this.props.name}</div>;
  }
}

export default Purecomp;
