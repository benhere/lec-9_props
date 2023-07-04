import React, { Component } from "react";

class LifeCycle2ComponentMounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mark",
    };
    console.log("LifeCycle2 constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle2_getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle2_componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle2_shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle2_getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle2_componentDidUpdate");
  }

  render() {
    console.log("LifeCycle2_render");
    return (
      <div>
        <h2>Component Mounting Lifecycle2 Methods</h2>
      </div>
    );
  }
}

export default LifeCycle2ComponentMounting;
