import React, { Component } from "react";
import Try from "./Try";

// 숫자 4개 중복없이 랜덤 뽑기 함수
function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(), // ex: [1,3,5,7]
    tries: [], // push 쓰면 안 돼요
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};

  names = [
    { name: "like", name2: "맛있다1" },
    { name: "like", name2: "맛있다2" },
    { name: "like", name2: "맛있다4" },
    { name: "like", name2: "맛있다3" },
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        {/* <ul>
          {["like", "like", "like", "like", "like"].map((v) => {
            return <li>{v}</li>;
          })}
          <li></li>
        </ul> */}

        {/* 배열 2개 뽑기 */}
        {/* <ul>
          {[
            ["like", "맛있다1"],
            ["like", "맛있다2"],
            ["like", "맛있다3"],
            ["like", "맛있다4"],
          ].map((v) => {
            return (
              <li>
                <b>{v[0]}</b>
                {v[1]}
              </li>
            );
          })}
        </ul> */}

        {/* 배열안에 객체 사용 */}
        {/* <ul>
          {this.names.map((v, i) => (
            <li key={v.name + v.name2}>
              <b>{v.name}</b> - {v.name2} {i}
              <div>컨텐츠1</div>
              <div>컨텐츠2</div>
              <div>컨텐츠3</div>
              <div>컨텐츠4</div>
              <div>컨텐츠5</div>
            </li>
          ))}
        </ul> */}

        {/* 컨텐츠 다른 파일로 빼기 - Try */}
        <ul>
          {this.names.map((v, i) => (
            <Try key={v.name + v.name2} value={v} index={i} />
          ))}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
