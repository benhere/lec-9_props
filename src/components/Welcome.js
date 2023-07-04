import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to class component by {this.props.name} a.k.a{" "}
          {this.props.heroName}
        </h1>
      </div>
    );
  }
}
