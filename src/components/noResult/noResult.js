import React, { Component } from "react";

class NoResult extends Component {
  state = {
    value: "No results"
  };
  render() {
    return (
      <div>
        <h1>
          {this.state.value}
        </h1>
      </div>

    );
  }
}
export default NoResult;