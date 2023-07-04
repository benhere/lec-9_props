import React, { PureComponent } from "react";

class PureComponentDemo extends PureComponent {
  render() {
    console.log("Pure Component render");
    return (
      <div>
        <h1>Pure Component demo by {this.props.name}</h1>
      </div>
    );
  }
}

export default PureComponentDemo;
