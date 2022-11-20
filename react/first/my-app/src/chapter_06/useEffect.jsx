import React, { useState, useEffect } from "react";
import { useInsertionEffect } from "react";

// useEffect
// useEffect(이펙트 함수, 의존성 배열);
// useEffect(() => {
//    컴포넌트가 마운트 된 이후,
//    의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한번만 실행됨
//    의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
//  return () => {
//    컴포넌트가 마운트 해제되기 전에 실행됨
//    ........
// }
// }, [의존성변수1, 의존성변수2.....] );



function Counter(props) {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷하게 작동
  useEffect(() => {
    // 브라우저 API를 사용해서 document의 title을 업데이트
    document.title = 'You Clicked ${count} times';
  });

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  )
}


function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChage(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChage);
    // 컴포넌트가 unmount될 때 호출됨
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChage);
    };
  });

  if (isOnline === null) {
    return '대기 중..';
  }
  return isOnline ? '온라인' : 오프라인;
}