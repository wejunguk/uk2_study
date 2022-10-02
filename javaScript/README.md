# 자바스크립트에서 'use strict'; 를 사용하는 이유?
- 상식선에서 자바스크립트를 사용하게 된다.
- 코딩실수나 에러를 포착할 수 있다 -> 디버깅 가능
- 자바스크립트가 더 빨리 실행할 수 있게 된다.

# 객체 데이터
- let obj = { abc: 123 }; //console.log(obj.abc); //123

# 변수
 const : 재할당 불가능, let : 재할당 가능

# DOM API (Document Object Model Application Programming Interface)
- DOM : HTML의 여러가지 모델, div요소,span요소, input요소 ..
- API : 웹 사이트가 동작하기위해 입력하는 프로그래밍 '명령'
- 자바스크립트로 HTML을 제어할때 사용하는 명령

# 메소드 체이닝
- split : 문자를 인수 기준으로 쪼개서 배열로 변환
- reverse : 배열을 뒤집기
- join : 배열을 인수 기준으로 문자로 병합해 반환

# parcel-bundler
- 로컬환경에서 개발서버 오픈할때 : scripts dev에 작성 npm run dev
- 사용자들이 보는 용도로 서버 오픈 : scripts build에 작성 npm run build