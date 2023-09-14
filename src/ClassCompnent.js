import React, { Component } from "react";

export class ClassCompnent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increamentCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.increamentCount}>Add {this.state.count} </button>
      </>
    );
  }
}

export default ClassCompnent;
