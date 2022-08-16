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

# Reactivity 구현 (vue-way.html)
- Object.defineProperty : 객체의 동작을 재정의하는 API
- Object.defineProperty(대상 객체, 책체의 속성, {
    정의할 내용
}) 

# 즉시 실행 함수 MDN 문서 링크
- https://developer.mozilla.org/ko/docs/Glossary/IIFE

# 인스턴스
- 인스턴스 생성 : new Vue();
- 인스턴스의 속성과 API
 new Vue({
    el: , // 인스턴스가 그려지는 화면의 시작점 (특정 HTML태그)
    tamplate , // 화면에 표시할 요소 (HTML, CSS 등)
    data: , // 뷰의 반응성이 반영된 데이터 속성
    methods: , // 화면의 동작과 이벤트 로직을 제어하는 메서드
    created: , // 뷰의 라이프 사이클과 관련된 속성
    watch: , // data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성
 });

 # MDN 생성자 함수 설명 
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function
 # MDN Prototype 설명 문서
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
