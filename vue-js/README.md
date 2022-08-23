# VS Code 확장 플러그인
- Vetur : VSCode에서 지원하는 Vue 플러그인
- Material Icon Theme
- Night Owl : 코드 강조 플러그인
- Live Server
- ESLint
- Prettier
- Auto Close Tag
- Atom Keymap


# 단축키
- ! + tab : html 기본코드 자동생성
- Ctrl + \ : 패널 토글
- 같은 텍스트 선택 : ctrl + d

# Reactivity 구현 (vue-way.html)
- reactivity: 루트 컴포넌트의 변경된 값을 화면에 바로 보여주는 것
- Object.defineProperty : 객체의 동작을 재정의하는 API
- Object.defineProperty(대상 객체, 책체의 속성, {
    정의할 내용
});

# 즉시 실행 함수 MDN 문서 링크
- https://developer.mozilla.org/ko/docs/Glossary/IIFE

# Instance
- 인스턴스 생성 : new Vue();
- 인스턴스의 속성과 API
    - el: 인스턴스가 그려지는 화면의 시작점 (특정 HTML태그)
    - tamplate: 화면에 표시할 요소 (HTML, CSS 등)
    - data: 뷰의 반응성이 반영된 데이터 속성
    - methods: 화면의 동작과 이벤트 로직을 제어하는 메서드
    - created: 뷰의 라이프 사이클과 관련된 속성
    - watch: data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성

 # MDN 생성자 함수 설명 
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function
 # MDN Prototype 설명 문서
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

# Components
- 인스턴스를 생성하면 개발자도구에서 Root 컴포넌트로 인식
- 전역 컴포넌트 
    - Vue.component('컴포넌트 이름', 컴포넌트 내용);
- 지역 컴포넌트
    - new Vue({componts: {'컴포넌트 이름': '컴포넌트 내용'} 
- 전역 컴포넌트와 지역 컴포넌트의 차이점 
    - 지역검포넌트사용시 특정 컴포넌트 하단에 어떤 컴포넌트를 사용했는지 한번에 알 수 있음
    - 플러그인,라이브러리리 사용시 전역 컴포넌트 사용
    - 전역 컴포넌트를 사용하면 인스턴스를 생성할때마다 등록할 필요가 없다.
- 컴포넌트 통신 규칙
    - 상위 컴포넌트->하위 컴포넌트: 데이터 내려줌, 프롭스 속성
    - 하위 컴포넌트->상위 컴포넌트: 이벤트 올려줌, 이벤트 발생
- 컴포넌트 통신 규칙: 데이터의 흐름을 추적할 수 있다.

# Props 속성
- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터이름"></app-header>

# Event emit
- <app-header v-on:하위 컴포넌트에서 발생한 이벤트 이름="상위 컴포넌트의 메서드 이름"></app-header>

# 뷰 인스턴스에서의 this
- https://www.w3schools.com/js/js_this.asp
- https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8

# 같은 컴포넌트 레벨간의 통신 방법
1) 상위 컴포넌트로 이벤트올린다.
2) 상위 컴포넌트에서 프롭스를 통해 하위 컴포넌트로 데이터를 보낸다.

# 뷰 라우터
 - 뷰 라이브러리를 이용하여 싱글 페이지 애플리케이션을 구현, 페이지간의 이동 기능 구현할 때 사용하는 라이브러리
 - 라우터 CDN 설치 가이드 문서 
    - https://joshua1988.github.io/vue-camp/vue/router.html
    - Root에 $route가 안잡히는 이유?
        - 라이브러리 CD주소와 라이브러리 버전 확인하기