# 준비하기

- npm init
- npm i next@9 //9버전 next 설치
- npm i react react-dom
- pages 폴더생성 : js 파일 관리
- npm i prop-types : 프롭스검사
- npm i eslint -D
- npm i eslint-plugin-import -D
- npm i eslint-plugin-react -D
- npm i eslint-plugin-react-hooks -D
- npm i antd@4.3.1 styled-components @ant-design/icons

# Next.js

- 리액트의 SSR(서버사이드렌더링) 지원 프레임워크
  첫 방문때만 브라우저-프론트-백엔드 다 합쳐서 화면에 보여지고
  그 이후(버튼클릭, a태그 클릭)엔 리액트방식(화면은 변하지 않고 백엔드정보만 바뀜)으로 구현
- 서버 로딩을 없앨 수 있음
- import Head from "next/head"; : 헤드 컴포넌트 지원
- import Link from "next/link";
- 동적 라우팅 기능
  [name].js
- 자체적인 라우터 기능 가능 (설치안해두 됨)
- 리액트 핫 로더 기능 가능 :

# \_app.js VS AppLayout

- \_app.js : 모든 페이지 완전 공통인 부분
- AppLayout : 특정 컴포넌트끼리 공통

# 반응성페이지

- antd 사용해 개발하기
  - xs: 모바일, sm: 태블릿, md: 작은 데스크탑
  - gutter: 그리드 간격
  - card

# useCallBack

- 컴포넌트에 프롭스로 넘겨주는 함수는 useCallback으로 사용해야지 최적화 됨
- id와 password를 입력할 때마다 state가 바뀌는데 useCallback에서 바뀌는 state를 인지하려면 [] 배열에 넣어주어야 합니다.
- const EX = useCallback((e) => {
  console.log(id, password);
  }, [id, password]);
- useCallback : 함수 캐싱
- useMemo : 값을 캐싱

# 커스텀 컴포넌트 스타일링

- 인라인 스타일링을 하면 리렌더링이 최적화가 되지 않기 때문에 사용한다.
- 1. 스타일드 컴포넌트 사용
  - styled.div
  - styled(Input.Serch): (컴포넌트) 사용
- 2. useMemo 사용

  - const style = useMemo(() => ({ maringTop: 10 }, []));
  - 사용부분 컴포넌트에 style={style} 선언

  # 리렌더링

  - 함수형 컴포넌트에서 리렌더링되면 return에서 바뀌는 부분만 다시 시작된다.
  - Hooks부분은 같은부분으로 쳐서 바뀐게 없다로 인식

  # onFinish

  - submit 되면 Form에서 호출됨
  - 이미 preventDefault() 되어있음

  # a 링크 새창으로, 안전하게 열리게 하기

  - target="\_blank" rel="noreferrer noopener"

  -a = () => {} 이런 경우 함수의 몸통이고 () => ({}) 이런 경우 {} 객체를 return

# 중앙데이터저장소

- Redux, 컨텍스트 API, 아폴로 등..
- 여러 컴포넌트에서 사용되는 공통 데이터를 중앙데이터저장소역활을 하는 Redux에서 관리를 해서
  각 컴포넌트에 필요 데이터(비동기요청)를 보내준다. 부모컴포넌트를 만들어 자식컴포넌트로 보내지 않아도 됨
- context API : 데이터 요청,성공,실패 했을 경우를 다 정의해야 함

# Redux

- 중앙데이터저장소
- 여러 컴포넌트에서 사용되는 공통 데이터를 관리함, 각 컴포넌트에 필요 데이터를 비동기요청으로 보내준다.
- npm i next-redux-wrapper@6.0.2 (버전 확인 필수)
- npm i redux@4.0.5
- npm i react-redux@7.2.1 : 리액트와 리덕스를 연결해줌
- npm i react-slick@0.27.11

- 돌아가는 원리
  - 중앙저장소에 데이터가 있고 하나의 액션에 액션의 이름과(type) 수정할 데이터를 적어준다. 그런 후 dispatch를 하면 중앙저장소에 있는 데이터가 수정되는데, 이때 reducer에 액션을 어떻게 처리할지(reducer에 넣어준 방식으로 테이터가 수정됨) 적어주면 그 경우에 따라 데이터가 수정됨
- 코르량이 많아지는데 reducer를 사용하는 이유는?
  - 액션 하나하나가 redux에 기록이 돼서 데이터의 히스토리를 관리 할 수있다.
  - 버그 잡기 쉬움
    \*) 객체의 불변성
    {} === {} // false const a = {}; const b = a; a === b // true
- 데이터는 새로 만들어 저장해야 하는데 왜 그래야 할까?
  - 새로 만들어 저장해야 변경 내역들이 추적이 가능하기 때문에
- state, action, reducer
- store : state + reducer
- store를 componet에서 사용할 수 있음, stor에 액션을 dispatch하는 순간 타입과 데이터가 리듀서로 전달 -> 다음 state로 바뀜 기존 initialState와는 다른 객체가 생성되는 것

- 중복되는 액션은 함수로 만든다. => 액션생성기=동적액션
- 액션하나를 만들어서 dispatch해두면 reducer에 따라 다음 state가 나오고 이전과 다음 state가 바뀐걸 확인되면 알아서 관련된 component state가 바뀐다.

- 액션 크리에이터 생성
- useSelecter: 데이터 가지고 옴(store사용)
- useDispatch
- combineReducers: 쪼개진 reducer 합쳐줌

- 액션을 기록하고 싶으면: 미들웨어를 붙여야한다.
  - 미들웨어: 액션이 리듀서로 전달되기 전후로 추가 작업을 실행해주는 함수, 리덕스의 없던 기능 추가
- npm i redux-devtools-extension@2.13.8 : 브라우저 개발자 도구랑 연동됨
- 배열안에 jsx를 넣을땐 꼭 key 값을 넣어야 한다. 그래서 map 사용시 key 넣음
- 옵셔널 체이닝 연산자: me && me.id = me?.id

- ture-> false/ false-> ture 만드는 코드는 (prev) => !prev로
- 기존 클래스에 새로운 스타일 덮여씌우기
  - createGlobalStyle사용
- transform 안에 postion:fixed;를 넣는 경우? fixed를 잡지 못하는 버그 발생
  - 해결? transform 해제하기 : transform: none !important;

# Redux-thunk

- 리덕스 미들웨어
- 리덕스가 비동기액션을 dispatch할 수 있도록 도와줌
- 비동기액션 하나에 여러개의 동기액션을 사용 할 수 있음
- npm i redux-thunk@2.3.0

# Redux-saga

- npm i redux-saga
- npm i axios
- createSagaMiddleware()생성
- generator
  - 함수 실행하다 yield만나면 멈춤 => 중간점이 있는 함수
  - generator 호출하고 그 값을 next()로 done이 true 될때까지 호출
  - 무한의 이벤트 리스너로 활용 가능
  - rootsaga를 만들고 그안에 호출
- 이벤트 리스너들 만들어서 rootSaga에 등록해주고
- 이벤트 리스너들을 while (true)로 감싸는 이유(takeEvery많이 씀)?
  - 이벤트 리스너의 yield부분이 실행된후 재실행이 되지 않기 때문에
    ) saga쪼개고 reducer연결: 11분 흐름 정리

# useRef

- ref: 실제 DOM에 접근하기 위해 사용

# saga-effect

- all, fork, call, put
  - all: 배열로 받아서 배열안에 있는거 한번에 실행
  - fork: 비동기 함수 호출
  - call: 동기 함수 호출
  - put: dispatch
  - take: take('LOG_IN'): LOG_IN액션이 실행될때까지 기다리겠다.
  - takeEvery: 이벤트 리스너들 반복사용 가능하게 해줌
  - takeLatest: 완료되지 않은 상태가 두개 이상일 때 마지막 것만 실행하게 해줌
    - 두번클릭이 되어있을 때 서버에 요청은 2개가 가지만, 응답은 1개만 해주는 것이므로
      서버에 요청이 2개가 남아있는지 확인해야한다.
  - throttle: 시간설정해두면 그 시간동안 액션이 딱 한번만 실행된다.
  - delay: 더미데이터 선언시 사용
  - throttling: 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것
  - debouncing: 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것
