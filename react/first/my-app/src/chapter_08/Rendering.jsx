import { useState } from "react";

// 컨디셔널 랜더링 : 조건에 따른 랜더링, 조건부 렌더링, 조건에 따라서 렌더링이 달라지는것
function UserGreeting(props) {
  return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
  return <h1>회원가입을 해주세요</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting/>
}

// ture {}, [], 0이 아닌 숫자, 문자(낫 스트링)
// flase 0, -0, '', "", ``,null,undefined,Nan

// 엘리먼트 변수
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>로그인</button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>로그아웃</button>
  )
}

function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick}/>;
  } else {
    button = <LoginButton onClick={handleLoginClick}/>;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/> {button}
    </div>
  )
}
// 인라인 컨디션 : 조건문을 코드 안에 집어넣는 것
// ture && 조건문 : 조건문이 true면 두번째 조건문을 평가

function MailBox(props) {
  const unredaMessages = props.unredaMessages;

  return (
    <div>
      <h1>안녕</h1>
      {unredaMessages.length > 0 &&
        <h2>현재 {unredaMessages.length}개 메시지 읽지 않음</h2>
      }
    </div>
  )
}
