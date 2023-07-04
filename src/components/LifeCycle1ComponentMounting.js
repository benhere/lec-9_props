import React, { Component } from "react";
import LifeCycle2ComponentMounting from "./LifeCycle2ComponentMounting";

class LifeCycle1ComponentMounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mark",
    };
    console.log("LifeCycle1 constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle1_getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle1_componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle1_shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle1_getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle1_componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "React_Learning",
    });
  };

  render() {
    console.log("LifeCycle1_render");
    return (
      <div>
        <h2>Component Mounting Lifecycle1 Methods</h2>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycle2ComponentMounting />
      </div>
    );
  }
}

export default LifeCycle1ComponentMounting;
