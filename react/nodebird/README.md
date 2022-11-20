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

Next.js

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

#

- 컴포넌트에 프롭스로 넘겨주는 함수는 useCallback으로 사용해야지 최적화 됨
