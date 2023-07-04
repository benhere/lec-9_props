import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  usernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  commentsHandler = (event) => {
    this.setState({ comments: event.target.value });
  };

  topicHandler = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.username} has commented following ${this.state.comments} and selected ${this.state.topic}`
    );
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;

    return (
      <div>
        <h1>Form Components</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={this.usernameHandler}
            />
            <br />
            <br />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={comments}
              onChange={this.commentsHandler}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.topicHandler}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
