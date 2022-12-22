## Netfilx

# Create-react-App으로 리액트 설치

- npx create-react-app <폴더이름>
  - npx create-react-app ./ (현재 디렉토리에 설치)
    -> Babel이나 Webpack설정이 이미 다 되어 있음

# Axios

- 브라우저, node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
- 백엔드와 프론트가 통신을 쉽게하기 위해 사용
  npm install axios --save
- Axios 인스턴스 : 중복되는 부분을 간단히 사용하기 위해
  - 인스턴스 만드는 순서
    1. 인스턴스 생성할 폴더 파일 생성
    2.

#

- 윈도우 리로드: window.location.reload()

# useEffect

useEffect(() => {
// 효과 선언
return () => {
// 컴포넌트 사용안할 때의 효과 선언(효과 선언을 종료하는 걸 선언)
}
}, [종속성])

- 먼저 렌더링이 한번 된 이후에 호출이 되게 됩니다.
- 종속성 배열에 state나 props를 넣어주면 그 state나 props가 변할 때마다 다시 호출이 되게 됩니다.

# styled Component

- javaSciript안에서 CSS 처리 할 수 있게 해주는 라이브러리
  npm install --save styled-components

# Iframe

- HTML Inline Frame
- 다른 HTML페이즈를 현재 페이지에 포함시키는 중첩된 브라우저
- frame요소를 이용하면 해당 웹 페이지안에 어떠한 제한 없이 다른 페이지 불러와서 삽입 가능

# React Router Dom

- npm install react-router-dom --save
- 웹 앱에서 동적 라우팅을 구현 할 수 있음
- 리액트는 SPA이므로 index.html 템플릿 하나만 가지고 있음
- 이 하나에 자바스크립트를 이용해 다른 컴포넌트를 index.html에 넣으므로 페이지 변경하는건데
  이 때 Router Dom 라이브러리가 새 컴포넌트로 라우팅/탐색을 하고 렌더링하는데 도움을 줌
- (index.html) - (Router) - (component1) or (component2) or (component2)
- 앱 어디서나 Router 사용할 수 있게 하기: react-router-dom에서 BrowerRouter 루트 구성
- BrowserRouter - HTML5 History API(pushState, replactState, propstate) 사용하여 UI를 URL과 동기화된 상태로 유지
  ex) localhost:3000/home에 <Home /> 컴포넌트를 보여주고 싶을때, 동기화된 상태로 유지함

# React Router Dom APIs

- 중첩라우팅, Outlet, useNavigate, useParams, useLocation, useRoutes
