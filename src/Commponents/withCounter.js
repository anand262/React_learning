import React from "react";

const UpdatedComponent = (OrignalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementVal = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OrignalComponent
          count={this.state.count}
          incrementVal={this.incrementVal}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
