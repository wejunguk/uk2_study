// Composition vs Inheritance
// 컴포지션 : 여러개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것
// 복잡한 컴포넌트를 쪼개 여러개의 컴포넌트로 만들고
// 만든 컴포넌트들을 조합해 새로운 컴포넌트를 만들어라!

const { useState } = require("react");

function Dialog(props) {
  return (
    <FancyBorder border="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

function SignUpDialog(props) {
  const [nickname, setNickname] = useState('');

  const handleChage = (e) => {
    setNickname(e.target.value);
  }

  const handleSignUp = (e) => {
    alert(`어서오세요! ${nickname}님`);
  }

  return (
    <Dialog
        title="화성시 탐사"
        message="닉네임 입력!">
        <input
            vlaue={nickname}
            onChange={handleChage} />
        <button onClick={handleSignUp}>가입하기</button>
    </Dialog>
  )
}

