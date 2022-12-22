import React, { Component } from "react";

class Test extends Component {
  state = {
    counter: 0,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counter !== nextState.counter) {
      return true; // 렌더링 함
    }
    return false;
  }

  onClick = () => {
    this.setState({});
  };

  render() {
    console.log("렌더링", this.state.counter);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
