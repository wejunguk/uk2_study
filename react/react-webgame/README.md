- 콘솔 input창에 무엇을 작성중인지 나타내기
  input.onChange = (e) => { console.log(e.target.value )};
- input창에 입력값도 state로 관리하기(gugudan01.html)

- onClick: 엘리먼트가 클릭했을 때 발생하는 이벤트
- onChange: 엘리먼트가 상태가 변경되었을 때 발생하는 이벤트
- onSubmit: 폼의 입력값이 서버로 제출될 때 발생하는 이벤트
- onFucus: 엘리먼트가 포커스를 획득했을 때 발생하는 이벤트
- onBlur: 엘리먼트가 포커스를 잃었을 때 발생하는 이벤트
- form 태그가 없으면 button에 onClick, form 태그가 있으면 button에 onSubmit

- 우리가 만든 함수엔 화살표함수 사용해야 한다.
- 예전 state값으로 현재 state를 만들때는 리턴해주는 함수만들어 prevState 사용하자(gugudan.html)
- input에 focus주기 ref={(c) => { this.input = c; } 하고 input; 실행

- 함수 컴포넌트에서 state와 ref기능을 추가한 것 => Hooks
- 함수 컴포넌트에서 ref 사용하기
  - const inputRef = React.useRef(null); 하고 inputRef.current.focus();
- class -> className / for -> htmlFor

- webpack은 왜 사용할까?
  - 여러개 자바스크립트 파일은 하나의 자바스크립트파일로 만듬
  - node를 알아야함
  - node: 자바스크립트 실행기
  - npm init: package.json 생성됨 license: MIT
  - react, react-dom, -D webpack, -D webpack-cli,
  - webpack.config.js:
- jsx를 담고 있으면 확장자는 jsx로 사용하자! 여기선 리액트를 사용하고있구나 정확히 알려주기 위해
- 코드를 쪼개면 필요한 파일만 불러와서 사용해 좋지만, 그렇게 되면 html 파일에서 script로 소스를 하나만 불러올수 있어 문제가 생긴다
  => 해결방안: 파일을 하나도 합쳐야한다 => 웹팩필요함
- node 내부 또는 외부 명령, 실행할 수 있는 프로그램 또는 배치 파일이 아닙니다
  => 명령을 등록하거나 package.json파일에 script로 등록 하거나 npx 명령
- 바벨도 웹펙에 등록해줘야함 -> 1.바벨을 설치하자
  - npm i -D @babel/core : babel의 기본 셋팅
  - npm i -D @babel/preset-env : 나의 브라우저에 맞게 최신문법을 옛날 문법으로 바꿔줌
  - npm i -D @babel/preset-react : jsx문법 지원
  - npm i -D babel-loader : 바벨과 웹펙 연결
  - npm i -D @babel/plugin-proposal-class-properties
  - npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D
  - npm i -D webpack-dev-server: 개발용 서버
  - dev "webpack serve --env development" 바꿔줌
- input에 value를 사용하면 onChange를 선언해야지 오류 안남
  - 그게 아니면 defaultValue 선언
- 자동 빌드 설정:webpack-dev-server,
- 핫리로딩: 기존 데이터 유지하면서 화면 리로딩
- input에는 컨트롤드 인풋과 언컨트롤드 인풋이 있음
  - 컨트롤드 인풋: vlaue와 onChange가 있음
  - 언컨트롤드 인풋: vlaue와 onChange가 없음, onSubmit에서만 value가 사용될 때
- import vs require

- 스타일 넣는 방법

  - 리랜더링을 막기위해 이렇게 사용함
  - styled component이용해서 넣기(AppLayout.js)
  - useMemo사용하기(profile.js)

- 컴포넌트에 프롭스로 넘겨주는 함수는 useCallback으로 감싸준다 => 최적화
- 버튼에 htmlType="submit"을 붙여줘야 Form이 서브밋이 되는데
  서브밋되면 onFinish 허출됨, onFinish은 e.preventDefault적용되어있음
  antd design

- react의 반복 map
  - 반복해서 사용해야하는 부분을 배열로 만들고 map으로 돌림
  - key 필수 설정: 고유한 값으로, 인덱스 비추
- props를 보면 아, 부모가 있겠구나
- react에선 state값이 바뀌어야지 랜더링이 일어남 -> 배열에 push로 값을 넣으면 state가 바뀌지 않음(기존 배열에 값만 추가한 상태) 따라서 배열에 새로운 랜더링을 일어나게 하려며
  기존 배열을 복사해서 거기에 값을 넣는다
  ex) const arr = [1], const arr2 = [...arr, 2] arr2 // [1, 2]
- useState에 함수를 호출하는 경우 그냥 함수이름만 한번 호출하게 한다.
- state나 props가 바뀌거나 부모 컴포넌트가 리랜더링되면 랜더링이 발생한다.
- state값에 아무 변화가 일어나지 않아도 setState를 선언하면 렌더링이 일어남
  이런 경우 어떤 경우에 렌더링을 다시 일어날수있을지 직접 선언해 줄 수 있다.
  - shouldComponentUpdate()
- PureComponent : shouldComponentUpdate()를 알아서 구현한 컴포넌트, class component에서만 사용가능한데 함수 컴포넌트에서도 사용가능하게 도와주는게 있음 'memo'
  - memo: 부모컴포넌트가 리랜더링 됐을 때 자식컴포넌트가 리랜더링 되는걸 막아준다.
- 컴포넌트 배열에 새로운 값(array) 넣기 : 꼭 기존 array 펼친후 새로운 값 넣어주기

- class에서 Ref를 Hooks와 비슷하게 만들기 { createRef }

  - inputRef = createRef(); 후 this.inputRef.current.focus(); 선언

- state를 함수로 설정하면 더 미세한 작업을 할 수 있음, 다른 동작을 넣는 것
- 부모로부터 받은 props를 자식이 바꿀수 없다! 부모만 바꿔야 함 근데 바꿔야하는 경우
  -> props를 state에 넣어준 후 작업(Try.jsx)
- 일반 객체로는 컨트롤이 안될때 Ref함수, setState함수 등을 사용해 정밀하게 정의
- jsx에선 아무것도 없다구 null
- Ref는 Dom에 직접 접근할때 사용
  - ref 사용시 접근과 값을 가져올 때 모두 current로 접근
- useState, useRef 차이?
  - useState로 사용한 값들은 랜더링시 재실행이 되고 useRef로 사용한 값들은 랜더링이 되지 않는다.
    따라서 값이 바뀌어도 다시 랜더링을 시키고 싶지 않은 부분은 useRef를 사용하면 된다.
    = 화면은 바뀌지 않는데 값은 자주 바뀌는 것들, 화면에 영향주지 않는 것들
- componentDidMount : 첫 랜더링 성공후 이게 실행됨, 첫 랜더링시에만 실행됨, 여기에 비동기 요청 많이 함
  - setState를 사용하고 싶은데 사용해야하는 자리가 없을때 여기서 실행함
- componentWIllUnmount : 컴포넌트가 제거되기 직전 실행됨, 비동기 요청 정리
- componentDidUpdate: 리랜더링시 실행
- 라이프 사이클
  - // 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
    // (setState/props 바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
    // 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
- 랜더안엔 setState가 절대 들어가면 안된다, 무한 랜더링 발생

- 리액트 소스 패턴: 5-4 2:03
- Hooks엔 라이프사이클이 없음
  - useEffect를 사용함 ->componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
  - return () -> componentWillUnmount 역할
  - useEffect(() => {}, [])
  - []: 배열에 넣은 값이 바뀔 때 useEffect가 실행된다.
  - 배열에 아무 값도 안넣으면 처음 딱 한번만 실행, 배열에 바뀌는 state값을 넣으면 렌더링 될때마다 계속 실행된다.
  - state마다 다른 이펙트를 주고싶은땐 useEffect를 여러번 사용 할 수 있다.
  - 커스텀 훅 : 특정한 훅 2개 이상 반복하면 커스텀 훅으로 빼줌
  - 안에 다른 리액트 기본 훅들을 가지고 있고, 하나로 묵어서 커스텀 훅으로 만듬
  - []이 빈 배열이면 componentDidMount 동일
  - [ ] 배열에 요소가 있으면 componentDidMount와 componentDidUpdate을 수행
  - 비동기 처리를 위할땐 항상 useEffect를 사용해야함
- 반복문을 기점으로 컴포넌트 분리, 자식으로 분리하고 props를 넘기는
- 함수컴포넌트안에서 한번만 동작시키게 하고 싶을 땐 useMemo를 이용해 값을 저장해두면
  값을 기억해우고 사용함, 한번만 동작하고,
- useMemo: 복잡한 함수 결과'값'을 기억 / 값을 기억한다. [] 바뀌기전까지
- useRef: 일반 값을 기억
- useCallback: 함수 자체를 기억 / 함수 자체를 기억한다 []바뀌기전까지

  - 함수 컴포넌트는 전체가 재실행되는데 useCallback으로 감싸면 함수를 기억해 둘 수 있다 따라서, 함수컴포넌트가 재실행되도 작동되지 않음, useCallback에 쓰이는 state는 배열에(inputs) 꼭 넣어줘야한다.
  - useCallback이 꼭 적용되어야 하는 부분 : 자식 컴포넌트에 props로 함수를 넘길 때
    - 컴포넌트에 넣는 함수들은 모두다 useCallback사용

- Hooks에 관한 팁

  - 조건문 안에 절대 넣으면 안되고, 함수나 반복문 안에도 웬만하면 넣지 말기

- useReducer + Context API
- Redux

-useRuducer : 여러개의 state를 하나로 묶고, state를 바꿀땐 action을 dispatch 해서 바꿈
여러개의 state를 하나의 useReducer로 관리할수있음, state를 비동기적으로 바뀜

- dispatch({ 액션객체 }) 안에 들어가는걸 액션이라고 한다. => dispatch는 액션을 실행하는 거라고 생각하면 됨
- 액션을 실행해서 state를 바꿔주는 것 ' reducer'
- state를 바꿀때 action을 dispatch해서 바꾼다. 그때 state를 어떻게 바꿀지는 reducer에 작성
  (동영상 정리 7-4 16:35)
- 리랜더링 되는 이유 파악하기 (7-5 3:20)
- context Provider로 컴포넌트들을 묶어줘야, 컴포넌트에서 데이터에 접근할수있음
- useContext : createContext로 선언한 데이터 가지고올수있음
