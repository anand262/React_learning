import React, { Component } from "react";

class FormHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: " ",
      comments: "",
      topic: "",
    };
  }

  handleuserChange = (event) => {
    this.setState({
      user: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handletopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handelSubmit = (event) => {
    alert(`mr. ${this.state.user} done`);
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        User-{" "}
        <input
          type="text"
          value={this.state.user}
          onChange={this.handleuserChange}
        />
        <br /> <br />
        <div>
          Comments-{" "}
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentChange}
          />
        </div>
        <br />
        <br />
        <div>
          selectt{" "}
          <select value={this.state.topic} onChange={this.handletopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
export default FormHandler;
