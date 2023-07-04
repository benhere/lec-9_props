import React, { PureComponent } from "react";
import PureComponentDemo from "./PureComponentDemo";
import RegComp from "./RegComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Benjamin",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Benjamin" });
    }, 2000);
  }

  render() {
    console.log("Parent Component render");
    return (
      <div>
        <h1>Parent Component</h1>
        <RegComp name={this.state.name} />
        <PureComponentDemo name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
