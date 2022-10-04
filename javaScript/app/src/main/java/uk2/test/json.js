// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법

// JSON파일은 속성을 "속성"으로 작성해야 한다.

import myData from './myData.json'
console.log(myData)

const user = {
  name: 'hi',
  age: 85,
  emails: [
    'aaa@naver.com',
    'bbb@naver.com'
  ]
}
console.log('user', user)

// JSON.stringify() : json의 형태로, 문자형태로 만들어 준다
const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

// JSON.parse : 문자를 다시 자바스크립트의 객체형태로 바꿔준다.
const obj = JSON.parse(str)
console.log('obj', obj)

