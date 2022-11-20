# 처음 만난 React

# JSX
  - JavaScript + XML/HTML
  - XML/HTML를 js로 변환해줌
  - React.createElement(type, [props], [children])는 XML을 js로 변환해주는 함수
  - 사용방법
    - js코드를 쓸땐 {} 안에 작성하면 된다. 정수,변수,다른 컴포넌트경우도 포함
      - ex) XML/HTML ... {js코드} ...
# 엘리먼트
  - 엘리먼트는 생성후에 attribute나 children 수정할 수 없다.

# Component
  - Props를 받아 Component(붕어빵틀)가 element(붕어빵)를 출력하는 구조
  - Props를 직접 바꿀 수 없고 같은 Props에 대해서는 항상 같은 결과를 보여줌
  - 항상 대문자로 시작해야 한다.
  -props
    - 리액트의 속성(붕어빵 재료), 컴포넌트에 전달할 다양한 정보를 담고있는 자바스크립트 객체
    - Read-only, 값을 변경 할 수 없다.
  - 함수 컴포넌트
    - state 사용 불가, LifeCycle에 따른 기능 구현 불가, Hooks
  - 클래스 컴포넌트
    - 생성자에 state 정의, setState()를 통해 state업데이트, LifeCycle methods 제공
  
# State and LifeCycle
  - State : 컴포넌트의 데이터, js 객체
    - state가 변경될 경우 재렌더링되기 때문에 렌더링이나 데이터흐름에 사용되는 값만 포함해야함
  - LifeCycle
    - Mounting: constructor 생성, render 진행
    - Updating: render 생성, New props(), setState(), forceUpdate()
    - Unmounting: 끝

# Hooks
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

# Event
  - Event Handler : 이벤트가 발생했을 때 동작하는 함수
  - 함수 컴포넌트 이벤트 처리
    - 방법1. 함수 안에 함수로 정의
    - 방법2. arrow function 사용 정의

# 컨디셔널 렌더링
  - 조건에 따라서 렌더링이 달라지는것
  - ex) true면 버튼 보이고 false면 버튼이 가려지는 것

# 인라인 컨디션
  - 조건문을 코드 안에 집어넣는 것
  - ture && 조건문: 조건문이 true면 두번째 조건문을 평가
  - false && 조건문: 첫번째 조건문이 false면 뒤 조건문 실행x, 하지만 첫번째 false문 결과값출력됨

# 컴포넌트를 렌더링 하고 싶지 않을땐 null을 리턴하면 된다!

# Form
  - 사용자로부터 입력을 받기 위해 사용
  - 컨트롤러 컴포넌트 : 모든 데이터를 state에서 관리
  - 모든 입력값 대문자 변경: event.target.value.toUpperCase()
  - select
    - 여러 개 옵션 선택 가능 select multiple={ture} value={['b', 'c']}
  - shared state: 하위 컴포넌트가 공통된 부모 컴포넌트 state를 공유해 사용하는 것

  