import React, { useState } from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isConfirmed: false };

    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm() {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }

  render () {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    )
  }
}

// 함수 컴포넌트로 바꾸기
// function ConfirmButton(props) {
//     const [isConfirmed, setIsConfirmed] = useState(false);

//     const handleConfirm = () => {
//         setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
//     };

//     return (
//         <button onClick={handleConfirm} disabled={isConfirmed}>
//             {isConfirmed ? "확인됨" : "확인하기"}
//         </button>
//     );
// }

// 위 코드 class fields syntax 사용 변경
// 1. bind 코드 삭제
// 2. 이벤트함수를 화살표 함수로 변경
// class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isConfirmed: false };
//   }

//   handleConfirm = () => {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   }

//   render () {
//     return (
//       <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     )
//   }
// }


export default ConfirmButton;