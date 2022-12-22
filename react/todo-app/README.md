# React

- 리액트는 화면만 구현하는 라이브러리 이므로 React사용시 여러 라이브러리가 필요하다.
  화면 구현: react
  라우팅(화면바꾸는): react-router-dom
  상태 관리: redux, mobx
  빌드: webpack, npm
- SPA (single page application)
  웹 사이트의 전체페이지를 하나의 페이지(index.html)에 담아서 동적으로 화면을 바꿔가며 표현

# Component

- 리액트로 만들어진 앱을 이루는 최소한의 단위

# 브라우저가 그려지는 원리 및 가상돔

리액트의 주요 특징 중 하나는 가상돔을 사용함
가상돔을 왜 사용할까?
작은 DOM의 잦은 변화로 인해 계속 render가 일어남 -> 가상 돔 등장 (가상돔: 실제 DOM을 메모리에 복사해준 것)
-> 데이터가 바뀌면 가상돔에 랜더링되고 이전 가상돔과 비교해 바뀐 부분만 찾아서 바뀐 부분만 실제 돔에 적용 시킴
=> 가상 돔 덕분에 30가가 변해도 한번에 묶어서 실제 돔에 적용시켜 비용을 줄이게 됨

# node.js

- 웹 브라우저 환경이 아닌곳에서도 자바스크립트를 사용할 수 있게해주는 것
- 웹팩: 여러개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축해 최적화하는 라이브러리
  로딩에 대한 비용 줄일 수 있고, 모듈 단위로 개발이 가능해 가독성과 유지보수가 쉽다.
- 바벨: 최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을
  구형 브라우저에서도 돌수 있게 변환 시켜주는 라이브러리

# jsx

자바스크립트와 html를 같이 사용할 수 있어서 ui에 데이터가 변하는 것들이나 이벤트 처리되는 부분을 더욱 쉽게 구현할 수 있음

# jsx key

- 요소의 리스트를 나열할 때 필요
- react가 변경, 추가, 삭제 된 항목을 식별하는데 도움이 된다.
- 가상 돔에 새로 생긴 키 값의 내용만 실제 돔에 적용시킴

# 메소드

-filter(): 주어진 함수를 통과하는 모든 요소를 모아 새로운 배열로 반환

# Hooks

- class 없이 state를 사용할 수 있는 새로운 기능 -코드가 간결해짐, DidMount와 DidUpdate, WillUnmount 부분을 useEffect에 다 처리해줄 수 있음

# Props

- 부모 컴포넌트로부터 자식 컴포넌트에 데이터등을 전달하는 방법
- 읽기 전용으로 자녀 컴포넌트 입장에서는 변하지 않는다. 변하고자 하면 부모 컴포넌트에서 state변경해야 함

# ES7+ React/Redux/React-Native snippet

- rafce : 함수 컴포넌트 생성
- rce : 클래스 컴포넌트 생성

# TailWindCSS

- HTML안에서 CSS스타일을 만들 수 있게 해주는 CSS 프레임워크
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init

## 사용한 언어

- React, TailWindCSS,
- React beautiful-dnd(html drg&drop API)
  - 드래그시 애니메이션 적용, 드래그 멈췄을 때 애니메이션 적용
    목록 재정렬 후 항목 위치 업데이트 => 쉽게 구현하게 도와주는 모듈 react-beautiful-dnd
    - npm install react-beautiful-dnd --save

# React beautiful-dnd

- 드래그앤드랍 사용할 부분 DragDropContext로 감싸기
- <Droppable/> <Dragable />

# memo

- 컴포넌트 렌더링 최적화. 렌더링 되지 않은 영역까지 렌더링되는것을 막아줌

# useCallback

- 랜더링 될 때 함수도 다시 렌더링 된다. 만약 이 함수가 자식 컴포넌트에 props로 내려준다면 함수가 리 렌더링 될 때마다 자식 컴포넌트도 함수가 새롭게 만들어지니 자식 컴포넌트도 계속 리랜더링 된다. 이 때 함수에 useCallback사용하면 렌더링 막을 수 있음
- useCallback(() => {}, [의존성 배열])
  - 의존성 배열: 함수 내에서 참조하는 state나 props가 있다면 의존성 배열에 추가
    - 의존성 배열에 아무것도 없다면 컴포넌트가 최조 렌더링 시에만 함수가 생성되며, 그 이후에는 동일한 참조 값을 사용하는 함수가 됨
