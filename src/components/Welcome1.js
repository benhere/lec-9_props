import React, { Component } from "react";

class Welcome1 extends Component {
  render() {
    const { name, heroName } = this.props;

    return (
      <div>
        <h1>
          Welcome to class component by {name} a.k.a {heroName}
        </h1>
      </div>
    );
  }
}

export default Welcome1;
