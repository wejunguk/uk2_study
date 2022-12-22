import React, { memo } from "react";

// 함수 component의 부모 자식의 랜더링 관계 끊기 - memo
const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
Try.displayName = "Try";

// 부모 props의 값을 바꾸고 싶은 경우 state로 만들어 변경하기
// const Try = memo(({ tryInfo }) => {
//   const [result, setResult] = useState(tryInfo.result);
//   const onClick = () => {
//     setResult("1");
//   };
//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div onClick={onClick}>{result}</div>
//     </li>
//   );
// });
// Try.displayName = "Try";

export default Try;
