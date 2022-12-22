import { useRef, useEffect } from "react";

// 1초마다 interval이 실행됨
// useInterval(() => {
//   console.log('hello');
// }, 1000);

// 위의 코드 확장 사용
// const [isRunning, setIsRunning] = useState(true);
// useInterval(
//   () => {
//     console.log("hello");
//   },
//   isRunning ? 1000 : null
// );
// null이 되면 interval 멈춤

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}

export default useInterval;
