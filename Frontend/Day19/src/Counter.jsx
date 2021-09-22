import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  render() {
    return (
      <div>
        <div className="buttons">
          <button onClick={this.handleClick} className="button1">
            {this.state.count}
          </button>
        </div>
      </div>
    );
  }
}
