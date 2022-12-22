import React, { PureComponent } from "react";

// PureComponent는 알아서 state가 변하면 렌더링을 해준다
// 따라서 새로운 값을 넣을땐 기존 배열 복사 후 값을 추가해주자
// 안그러면 값이 바뀌었는지 컴포넌트가 모른다.
class Test extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
    object: { a: 1, b: 2 },
    array: [5, 3, 6],
  };

  onClick = () => {
    this.setState({
      object: { ...this.state.object },
      array: [...this.state.array, 1],
    });
  };

  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
