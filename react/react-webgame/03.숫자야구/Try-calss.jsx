import React, { PureComponent } from "react";

// Map에서의 Try Component
// class Try extends Component {
//   render() {
//     return (
//       <li>
//         <b>{this.props.value.name}</b> - {this.props.value.name2} -{" "}
//         {this.props.index}
//         <div>컨텐츠1</div>
//         <div>컨텐츠2</div>
//         <div>컨텐츠3</div>
//         <div>컨텐츠4</div>
//         <div>컨텐츠5</div>
//       </li>
//     );
//   }
// }

// class컴포넌트의 부모 자식의 랜더링 관계 끊기 - PureComponent
class Try extends PureComponent {
  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

// // 부모 props의 값을 바꾸고 싶은 경우 state로 만들어 변경하기
// class Try extends PureComponent {
//   state = {
//     result: this.props.result,
//     try: this.props.try,
//   };
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

export default Try;
