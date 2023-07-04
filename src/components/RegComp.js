import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Regular Component render");
    return (
      <div>
        <h1>RegComp by {this.props.name}</h1>
      </div>
    );
  }
}

export default RegComp;
