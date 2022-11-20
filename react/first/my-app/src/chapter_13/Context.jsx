// Context
// 일일이 props로 데이터를 전달할 필요 없이
// context를 통해 다이렉트로 데이터를 전달한다.
// 중간매개체
// 언제 사용할까?
// 로그인여부, UI테마, 로그인 상태 등등

// context 적용전
// function App(props) {
//   return <Toolbar theme="dark" />;
// }

// function Toolbar(props) {
// 이 Toolbar 컴포넌트는 ThemedButtomdp에 theme를 넘겨주기 위해 'theme' props을 가져야 한다.
// 현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는것은 매우 비효율적
//   return (
//     <div>
//       <ThemedButtom theme={props.theme}/>
//     </div>
//   );
// }

// function ThemedButtom(props) {
//   return <Button theme={props.theme}/>
// }

// context 적용후

// 컨텍스트는 데이터를 매번 컴포넌트를 통해 전달할 필요가 없이 컴포넌트 트리로 곱바로 전달
// 여기에서 현재 테마를 위한 컨텍스트를 생성하며, 기본값은 'light'
const ThemeContext = React.createContext('light');

// Provider를 사용하여 하위 컴포넌트에게 현재 테마 데이터를 전달
// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계 없이 데이터 읽기 가능
// 여기에서는 현재 테마값으로 'dark'를 전달
function App(props) {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider> 
  );
}

// 이제 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없음
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton(props) {
  // 리액트는 가장 가까운 상위 테마 Provider를 찾아서 해당되는 값을 사용
  // 만약 해당되는 Provider가 없을 경우 기본값(여기에선 light)을 사용
  // 여기에서는 상위 Provider가 있기 때문에 현재 테마 값은 'dark'
  return (
    <ThemeContext.Consumer>
      {value => <Button theme={value} />}
    </ThemeContext.Consumer>
  )
}

// Context API
// context생성 - React.createContext();
// const My = React.createContext(기본값);

// context.Provider : 하위 컴포넌트에게 Context전달, vlaue값이 전달
// <My.Provider value={}>
// 