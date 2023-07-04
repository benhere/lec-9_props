import React, { Component } from "react";

// React Fragments let you group a list of children elements without adding extra node to the DOM

class FragmentDemo extends Component {
  render() {
    return (
      <>
        <h1>Fragments Demo</h1>
        <p>This describes the Fragment Demo component</p>
      </>
    );
  }
}

export default FragmentDemo;
