// useMemo
// const memoiedValue = useMemo(
//   () => {
//     // 연산량이 높은 작업을 수행하여 결과를 반환
//     return computeExpensiveValue(의존성 변수1, 의존성 변수2);
//   },
//   [의존성 변수1, 의존성 변수2]
// );

// import { useCallback } from "react";

// useCallback
// const memoiedCallback = useCallback(
//   () => {
//     doSomething(의존성 변수1, 의존성 변수2);
//   },
//   [의존성 변수1, 의존성 변수2]
// );

// useCallback(함수, 의존성 배열);
// =
// useMemo(() => 함수, 의존성 배열);

// useRef
// const refContainer = useRef(초깃값);

function TextInputWithFocusButton(props) {
  const inputElem = useRef(null);
  
  const onButtonClick = () => {
    // current는 마운트된 input element 가르킴
    inputElem.current.focus();
  };

  return (
    <>
      <input ref={inputElem} type="text" />
      <button onCliek={onButtonClick}>Focus</button>
    </>
  )
}
