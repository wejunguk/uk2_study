# mdn

: https://developer.mozilla.org/ko/

# 자바스크립트에서 'use strict'; 를 사용하는 이유?

- 코딩실수나 에러를 포착할 수 있다 -> 디버깅 가능
- 자바스크립트가 더 빨리 실행할 수 있게 된다.

# 객체 데이터

- let obj = { abc: 123 }; //console.log(obj.abc); //123

# 변수

const = : 재할당 불가능, let : 재할당 가능

# DOM API (Document Object Model Application Programming Interface)

- DOM : HTML의 여러가지 모델, div요소,span요소, input요소 ..
- API : 웹 사이트가 동작하기위해 입력하는 프로그래밍 '명령'
- 자바스크립트로 HTML을 제어할때 사용하는 명령
- html의 문서를 브라우저가 랜더링하기위해, 그 안에 많은것을 작동시키기위해 가공시켜놓은 객체
- 자바스크립트를 이용해 웹,앱 UI를 핸들링할 수 있는 유일한 방법

# 메소드 체이닝

- split : 문자를 인수 기준으로 쪼개서 배열로 변환
- reverse : 배열을 뒤집기
- join : 배열을 인수 기준으로 문자로 병합해 반환
- pop, push, shift, unshift, splice -> 배열을 직접적으로 수정
- concat, slice -> 새로운 배열을 만들어냄

# 함수의 선언(기명함수)과 함수의 표현(익명함수)

- 함수의 선언
  - function sum() {}
- 함수의 표현
  - const A = function () {};
  - const A = () => {};

# parcel-bundler

- 로컬환경에서 개발서버 오픈할때 : scripts dev에 작성 npm run dev
- 사용자들이 보는 용도로 서버 오픈 : scripts build에 작성 npm run build

# 호이스팅

- 함수 선언부가 유효범위 최상단으로 끌려올려지는 현상

# 내보내기

- 기본 통로
  - 메소드의 이름을 지정하지 않아도 된다.
  - 하나의 데이터만 내보낼 수 있다.
- 이름 지정 통로
  - 메소드 이름 필수
  - 사용할 때 {} 묶어서 이름을 적어야 한다.
  - 이름만 지정한다면 여러 데이터 내보내기 가능

# 라이브러리

- Lodash
- GSAP: 자바스크립트로 제어하는 타임라인 기반의 애니메이션
- ScrollToPlugin: 스크롤 애니메이션을 지원하는 GSAP 플러그인
- Swiper: 현대적인 슬라이드 라이브러리

## JS 고급

# 함수의 호출값을 보면?

- 리턴값을 대체해서 생각하자
  - 함수의 리턴값이 있으면 함수호출가능
  - 리턴값이 없으면 함수선언

# 이벤트 핸들러

- onClick, onChage, onSubmit, onLoad, onInput, onFocus, onBlur
- form이 있으면 buttom type submit
- form이 없으면 buttom type onclick
- input에서 change 이벤트 발생할 때? onChange or onInput

# 메서드

- repeat(): 주어진 문자열 반복 반환 ex) 'abc'.repeat(2); // abcabc
- string.indexOf(a) : String과 똑같은 글자시작 자릿수 출력, 값 없으면 -1 'Happy hi'.indexOf(hi):6 출력
- replace(a, b) : 첫번째 문자대신 두번째 문자로 수정
- match(/(?=)/) : 원하는 값 추출
- Object.assign(a, b) : a에 b 복사
- trim : 공백 제거 출력
- toFixed : 소수점의 몇번째 자리까지 유지할지, 그 값을 String으로 반환
- lastIndexOf() : 중복값 중 마지막 위치 알려줌, 없으면 -1반환
- splice(1, 3) : 1번째에서 3번째까지 지워짐
- splice(1) : 1번째에서 뒤에 싹 다 지움
- splice(1, 3, 'x', 'b') : 인덱스1에서 3까지 지운후 그 자리에 x, b 끼워넣음
- splice(2, 0, 'b') : 2인덱스 앞에 b 추가됨
- unshift() : 배열 제일 앞 값 추가
- shift() : 배열 제일 앞 값 제거
- push() : 배열 제일 뒤 값 추가
- pop() : 배열 제일 뒤 값 제거
- includes() : 배열 검색기능, true/false 반환 ex)a.includes(input): a에 input이 이미 있는지 확인
- confirm() : 확인창 생성
- parseInt(), parseFloat(), number() : 문자를 숫자로 변화할 때 사용
- join() : 배열을 문자열로 바꿈
  - a.join(); : [3,1,4,5] -> '3,1,4,6'
  - a.join(''); : [3,1,4,6]-> '3146'
- append() : 추가 a.append('hi'); : a변수 뒤 'hi' 출력
- createTextNode('추가할 글자)' : 글자를 계속 추가 할 경우 사용
  - a.append(document.createTextNode('추가할문자'));
- createElement() : 엘리먼트 생성
- 랜덤 뽑기
  - Math.random() : 랜덤 소숫점 숫자 추출
  - Math.round: 반올림
  - Math.ceil: 올림
  - Math.floor:내림
    - Math.ceil(Math.random()) : 랜덤 소숫점숫자 추출후 올림
    - Math.random() : 0 <= x < 1
    - Math.random() \* 9 : 0 <= x < 9
    - Math.random() \* 9 + 1 : 1 <= x < 10
    - Math.floor(Math.random() _ 9 + 1) : 1,2,3,4,5,6,7,8,9
      =Mate.floor(Mate.random() _ 10)
- slice(a,b) : 첫번째 자릿수부터 종료점 인덱스로 그 직전까지 추출
  - ex) slice(4, -1) : 인덱스4부터 -1은 뒤에서 첫번째니깐 마지막 숫자 전까지 추출
- 태그.className : 태그에 클래스 이름 지정
- console.dir(); : 자바스크립트 객체 구조 보여줌
- filter(a, b): b에 맞는 조건 빼고 나머지 지움
- bind:
- object.entries : key, vlaue 배열로 뽑음

# 함수

- setTimeout(함수, 시간) : 일정 시간 후 함수 실행, js전역함수
- setTimeout(() => {
  내용
  }, 시간)
- clearTimeout() : 설정된 timeout 함수 종료, js전역함수
  let 아이디 = setTimeOut(함수, 시간);
  clearTimeout(아이디); \* 타이머마다 아이디가 달라짐, 새로 아이디 저장
- setInterval(함수, 시간) : 시간 간격마다 함수 실행, js전역함수
- setInterval(() => {
  내용
  }, 시간)
- clearInterval() : 설정된 interval 함수 종료, js전역함수
  let 아이디 = setInterval(함수, 시간);
  clearInterval(아이디);

  //setInterval 함수를 같은 효과를 내는 setTimeOut로 바꿔보세요.
  // setInterval(() => {
  // console.log('hello')
  // }, 50)
  // =
  // function h() {
  // console.log('hello');
  // setTimeout(h, 50)
  // }
  // setTimeout(h, 50)

# Event

- addEventListener('click', 콜백함수) : 태그에 이벤트달때 사용하는 메서드(이벤트 이름)
- input.addEventListener('input', 함수)
- button.addEventListener('click', 함수)
- form.addEventListener('submit', 함수)
- removeEventListener : 이벤트 삭제
- 입력값(input)은 value
- div, span은 textContent
- 입력태그.value : 입력창의 값 가져옴
- 입력태그.value = 값 : 입력창에 값 넣음
- 입력태그.focus : 입력창 하이라이트
- 태그.textcontent : 태그 내부 문자 가져옴
- 태그.textcontent = 값 : 태그 내부의 문자에 값 넣음
- 태그.innerHTML : html 태그 인식
- event.target.value : 입력창 값 출력
- evnet.target.textContent: 입력창 값 가지고옴
- event.preventDefault(); : 기본 동작 막기 (form, a 등)

# 중복이 없는 배열

- new Set : 중복이 없는 배열
- new Set(값).size : 중복된 숫자 자동 제거
  - new Set(input).size !== 4; input에서 중복숫자4 지움, 숫자 3144 면 314가지고 코드진행

# if문에서 false가 되는 6가지

- if(false)
- if(null)
- if(undefined)
- if(0)
- if(NaN)
- if('') 빈문자열

# 비동기코드

- 입려한 순서대로 작동하지 않는 코드
- EventListener 대표적

# 알고리즘

- 피셔 예이츠 셔플(Fisher-Yates) : 모든 숫자를 섞는 방법, 무작위로 인덱스 하나 뽑은 후 새로운 배열로 옮김

# var와 let의 차이 이해하기(반복\*\*)

- 6-6 셀프체크-공색칠

# removeEventListener 주의점(removeEvent파일 참고!)

- 7-4 removeEventListener주의점
- 플래그 변수 쓰는걸 더 추천

# 배열

- 조건이 간단한, 몇번 반복할지 모를땐 : while
- 배열 요소 반복 배열: forEach(), map()
  - forEach(): 인수에 함수 넣는 메서드
    - forEach((element, index) => {})
  - map(element, index) : forEach를 하면서 새로운 배열에 결과값 담음
- 배열.sort(비교함수): 비교 함수대로 배열 정렬
  - a -> b : 오름차순 정렬, b -> a : 내림차순 정렬
  - ex) shuffle.slice(0, 6).sort((a, b) => a - b);
    : 원본을 수정하지 않고 인덱스0부터6까지 숫자 오름차순 정렬
- 배열의 평균구하기 \*reduce 메서드
  - records.reduce((a, c) => a + c) / records.length; // 배열 평균구하기
  - 배열에 reduce를 붙이면, 매개변수 2개를 가지고 있는 함수를 사용 할 수 있다.
    - [1, 2, 3, 4].reduce((a, c) => (a + c), 0)
      - a:누적값 c:현재값 0:초기값
      - 초기값 없으면 첫번째 값이 초기값이 된다!!!그리고 배열돌 때 두번째 값부터 사용됨
  - 배열을 객체리터널
    - ['가', '나', '다'].reduce((a, c, i) => { a[i] = c; return a }, {});

# 원본 배열이 바뀌지 않는, 새 배열로 결과값 생성

: map(), slice()
ex) 배열을 수정하지 않고 생성하는 방법 - 변수.slice(0, )

#

Array(9) : 길이가 9인 배열 생성
Array(9).fill() : undefined가 9개 차 있는 배열 생성
Array(9).fill().map((el, i) => {
return i + 1;
});

# 플래그 변수

- 참,거짓의 따라 안의 코드 실행여부 결정

# 리팩토링

- 중복되는 부분 빼서 매개변수로 만들어 코드 정리

# classList

- 태그.classList.contains('클래스'); : 클래스가 태그에 들어있나 true/false 반환
- 태그.classList.add('클래스'); : 클래스 추가
- 태그.classList.replace('클래스', '수정클래스'); : 클래스 수정
- 태그.classList.remove('클래스'); : 제거

# Truthy, Falsy

- true,false는 아니지만 true, flase로 여겨지는 값
- ture : {}, [], 0이 아닌 숫자, 문자(낫 스트링)
- flase : 0, -0, '', "", ``,null,undefined,Nan
