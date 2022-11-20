# React
  - Single page Application Framwork
  - 데이터와 화면의 불일치 해결

# 멀티 Element 생성
  - <></>

# component
  - 앨리먼트의 집합
  - 데이터와 화면을 하나로 묶어주는 덩어리, 데이터를 바꾸면 화면은 알아서 바꿔줘서 편리함
  - state : 데이터 영역, 달라지는 부분
  - render의 return : 화면 영역
  - 자바스크립트 소스는 반드스 {} 안에
  - html소스는 모두 소문자로 작성, 엄격한 / 태그 작성
  - return엔 반드시 하나의 태그가 와야한다. 형제태그가 2개이면? div or 프래그먼트(가짜태그) 감싸 사용
  - 객체를 함부로 바꾸지 마라
  - 함수든 class든 무조건 '대문자'로 시작해야 함
  - component를 만드는 방법
    1.함수 2.class

# 라이브러리, 플러그인..
  - react developer tools
  - webpack: 언어를 리액트언어로 바꿔줌
  - html-webpack-plugin
  - react-router-dom : 리액트 라우팅 라이브러리
    - useNavigate(): 페이지간 이동 Hook

# 버전 확인
  - render사용 -> 17버전, createRoot사용 -> 18버전
  ReactDOM.render(<LikeButton/>, document.querySelector('#root')); // React 17버전
  ReactDOM.createRoot(document.querySelector('#roor')).render(<LikeButton />); // React 18버전

# webpack 설정과 babel 설정
  - 웹팩: 자바스크립트 모듈 번들러
    - 번들러: 자바스크립트 파일을 기능 단위로 모듈화 하고 이것을 묶어 관리하는 것
  - bable loader: 트랜스파일러, ES6 이상으로 만들어진 파일을 ES5나 다른 특정 타겟으로 변경해주는 트랜스파일러cd
  - npm install --save-dev webpack
  - npm install webpack-cli --seve-dev
  - npm install webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin --save-dev
  - @babel/preset-react: 자바스크립트에 있는 jsx를 리액트 크리에이트엘리먼트함수구문을 변환

# webpack.config.js
 
# webpack 처리 구조, 셋팅
  - entry에 설정해주고 module에 트랜스파일 셋팅해주고 plugin에 변환된 파일을 받아서 일 처리하고 output에 출력
    ex) es6이상으로 만들어진 파일을 받고, 이것을 es5로 변환해달라 셋팅하고, 주석제거 플러그인을 셋팅하면 output에 써짐
  module.export = {
    mode: '', // 서비스 정보
    entry: '', // 입력정보 어떤 js에서 시작할건지
    output: { // 출력정보
    
    },
    module: {
    
    },
    plugins: [
    
    ]
  }
  - test: 정규식에 매칭되는 파일들만 loader에 보내줘!
  - exclude: 특정 디렉토리 제거
  
# babel 추가 셋팅
  - 자바스크립트 컴파일러, jsx를 자바스크립트도 이해할 수 있게 컴파일러 해주는 프로그램

# jsx
  - 쉽게 html 마크업구조로 ui를 만들 수 있다.
  - 자바스크립트 확장 문법

# setState
  - 객체를 사용하는 경우
  - 함수를 사용하는 경우
    - 언제? 예전 state값으로 새로운 state을 만들 땐, 예전값을 리턴해주는 함수를 사용하자!(this.state사용하는 경우)
  - setState를 할때마다 render를 다시 실행한다.

# Hooks
  - 함수 컴포넌트에 state와 ref 기능 사용가능한 것
  - useRef 왜 사용하지?
  - useState(): state를 사용하기 위한 Hook
    - 사용법: const [변수명, set변수명] = useState(초기값);
    - 변수 각각에 set함수가 따로 존재한다.
  - useEffect(): Side effect를 수행하기 위한 Hook, 생명주기 함수와 동일한 기능 수행가능
    - Side Effect: 데이터를 받아오거나 수동으로 DOM을 수정할땐 랜더링 후 작업하는 것
    - 사용법: useEffect(이펙트 함수, 의존성 배열);
    - Effect 함수가 mount, unmount 시 단 한번만 실행하고 싶을 경우 useEffect(이펙트함수, []);
    - useEffect(이펙트 함수); : 컴포넌트가 업데이트 될때마다 호출됨
  - useMemo(): Memoized value를 리턴하는 Hook
    - 랜더링이 일어나는 동안 실행
  - useCallback(): useMemo()와 유사하나 값이 아닌 함수를 반환
  - useRef():래퍼런스를 사용하기 위한 Hook
    - 래퍼런스: 특정 컴포넌트에 접근할 수 있는 객체
    - 내부의 데이터가 변경되었을 떄 별도로 알리지않음
    - Callback ref
  - 규칙
    1) 무조건 최상위 레벨(component)에서만 호출
    2) 리액트 함수 컴포넌트에서만 호출
  - eslint-plugin-react-hooks 플러그인
  - CustomHook: 여러개의 컴포넌트에서 하나의 커스텀훅을 사용 할 대 컴포넌트 내부에 있는 모든 state와 effect는 전부 분리되어 있다.

# useState
  : 상태값을 관리해주는 훅
  - setState시 prev값 사용가능(이전값)

# 사이드이펙트
  : 모든 동작들이 끝난 다음에 시작함
  - useEffect : 디펜던시 어레이 가지고 있음
    - 디펜던시 어레이: useEffect가 의존하는 값들
  - React.useEffect(() => {}); : 디펜던시 없기때문 모두 다 호출
      React.useEffect(() => {}, []); : 빈배열을 준것은 처음 랜더될때만 반응
      React.useEffect(() => {}, [show]); : 디펜던시 값 바뀔때마다 반응

# ref
  - input에 focus주기
  - ref={(c) => { this.input = c; } 하고 input; 실행

# form
  - event.preventDefault(); : 새로고침 되지 않음

# Redux







