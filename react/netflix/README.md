# Netfilx

## Create-react-App으로 리액트 설치

- npx create-react-app <폴더이름>
  - npx create-react-app ./ (현재 디렉토리에 설치)
    -> Babel이나 Webpack설정이 이미 다 되어 있음

## Axios

- 브라우저, node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
- 백엔드와 프론트가 통신을 쉽게하기 위해 사용
  npm install axios --save
- Axios 인스턴스 : 중복되는 부분을 간단히 사용하기 위해
  - 인스턴스 만드는 순서
    1. 인스턴스 생성할 폴더 파일 생성
    2.

##

- 윈도우 리로드: window.location.reload()

## useEffect

useEffect(() => {
// 효과 선언
return () => {
// 컴포넌트 사용안할 때의 효과 선언(효과 선언을 종료하는 걸 선언)
}
}, [종속성])

- 먼저 렌더링이 한번 된 이후에 호출이 되게 됩니다.
- 종속성 배열에 state나 props를 넣어주면 그 state나 props가 변할 때마다 다시 호출이 되게 됩니다.

## styled Component

- javaSciript안에서 CSS 처리 할 수 있게 해주는 라이브러리
  npm install --save styled-components

## Iframe

- HTML Inline Frame
- 다른 HTML페이즈를 현재 페이지에 포함시키는 중첩된 브라우저
- frame요소를 이용하면 해당 웹 페이지안에 어떠한 제한 없이 다른 페이지 불러와서 삽입 가능

## scrollLeft

## React Router Dom

- npm install react-router-dom --save
- 웹 앱에서 동적 라우팅을 구현 할 수 있음
- 리액트는 SPA이므로 index.html 템플릿 하나만 가지고 있음
- 이 하나에 자바스크립트를 이용해 다른 컴포넌트를 index.html에 넣으므로 페이지 변경하는건데
  이 때 Router Dom 라이브러리가 새 컴포넌트로 라우팅/탐색을 하고 렌더링하는데 도움을 줌
- (index.html) - (Router) - (component1) or (component2) or (component2)
- 앱 어디서나 Router 사용할 수 있게 하기: react-router-dom에서 BrowerRouter 루트 구성
- BrowserRouter - HTML5 History API(pushState, replactState, propstate) 사용하여 UI를 URL과 동기화된 상태로 유지
  ex) localhost:3000/home에 <Home /> 컴포넌트를 보여주고 싶을때, 동기화된 상태로 유지함
- 경로 이동: App.js에 Routes, Route로 정의 / <Link /> 태그 이용

## React Router Dom APIs

- 중첩라우팅, Outlet, useNavigate, useParams, useLocation, useRoutes
  - 중첩라우팅: ReactRouter의 가장 강력한 기능 중 하나, 복잡한 레이아웃 코드를 어지
    럽힐 필요가 없습니다. 대부분의 레이아웃은 URL의 세그먼트에 연결되며 React
    Router는 이를 완전히 수용
  - Outlet: 자식 경로 요소를 렌더링하려면 부모 경로 요소에서 <Outlet>을 사용해야 합니다. 이렇
    게 하면 하위 경로가 렌더링될 때 중첩된 UI가 표시됨
  - useNavigate: 경로를 바꿔줌 navigate('/home') ===> localhost:3000/home 으로 감
  - useParams: :style 문법을 path 경로에 사용하였다면 useParams()로 읽을 수 있음
  - useLocation: 이 Hooks 는 현재 위치 객체를 반환. 현재 위치가 변경될 때마다 일부
    side effect를 수행하려는 경우에 유용
  - useRoutes: useRoutes Hooks는 와 <Routes>와 기능적으로 동일하지만 <Route> 요소 대신
    JavaScript 객체를 사용하여 경로를 정의. 이러한 객체는 일반 <Route> 요소와
    동일한 속성을 갖지만 JSX가 필요하지 않음

## Debounce()

- 사용자가 미리 결정된 시간 동안 타이핑을 멈출 때까지 keyup 이벤트의 처리를 지연
- UI 코드가 모든 이벤트를 처리할 필요가 없고, 서버로 전송되는 API 호출 수도 크게 줄어듬

## useRef()

- 특정 DOM을 선택할 때 사용
- DOM을 직접 선택해야 하는 경우
  1. 엘리먼트 크기를 가져와야 할 때
  2. 스크롤바 위치를 가져와야 할 때
  3. 엘리먼트에 포커스를 설정해줘야 할 때

## swiper

- npm i swiper --save

## 배포하기

## API_KEY 환경변수로 숨기기

- .env파일에 key 값 저장 후 axios에 연결

## gh-pages 모듈

- npm i gh-pages --save-dev
