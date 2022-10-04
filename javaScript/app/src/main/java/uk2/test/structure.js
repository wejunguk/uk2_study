import _ from 'lodash'
// 구조 분해 할당
// 비구조화 할당

// const user = {
//   // key: value
//   name: 'hi',
//   age: 85,
//   email: 'aaa@naver.com'
// }

// const { name: hi, age, email, address = 'korea' } = user

// console.log(`사용자의 이름은 ${hi}입니다.`)
// console.log(`${hi}의 나이는 ${age}입니다.`)
// console.log(`${hi}의 이메일주소는 ${email}입니다.`)
// console.log(address)

// // 배열도 구조 분해 할당이 가능한데,
// // 순서대로 출력이 된다.
// const fruits = ['apple', 'banana', 'cherry']
// const [a, b, c, d] = fruits
// console.log(a, b, c, d)

// const fruits2 = ['apple', 'banana', 'cherry']
// const [, b] = fruits2
// console.log()
// // banana 출력
// --------------------------------------
// 전개 연산자(Spread) : 배열데이터를 ,로 구문해서 아이템이 출력된다.
// const fruits = ['apple', 'banana', 'cherry']
// console.log(fruits)
// console.log(...fruits)

// function toObject(a, b, c) {
//   return {
//     a: a,
//     b: b,
//     c: c
//   }
// }
// console.log(toObject(...fruits))

// const fruits2 = ['apple', 'banana', 'cherry', 'bear']
// console.log(fruits2)
// console.log(...fruits2)

// function toObject(a, b, ...c) {
//   return {
//     a: a,
//     b: b,
//     c: c
//   }
// }
// console.log(toObject(...fruits2))
// =
// const fruits2 = ['apple', 'banana', 'cherry', 'bear']
// console.log(fruits2)
// console.log(...fruits2)

// const toObject = (a, b, ...c) => ({ a, b, c })
// console.log(toObject(...fruits2))
// --------------------------------------
// 데이터 불변성(Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function, 

// let a = 1
// let b = 4
// console.log(a, b, a === b) 1 4 false
// b = a
// console.log(a, b, a === b) 1 1 true
// a = 7
// console.log(a, b, a === b) 7 1 false
// let c = 1
// console.log(b, c, b === c) 1 1 true

// let a = { k: 1 }
// let b = { k: 1 }
// console.log(a, b, a === b)
// a.k = 7
// b = a
// console.log(a, b, a === b)
// a.k = 2
// console.log(a, b, a === b)
// let c = b
// console.log(a, b, c, a === c)
// a.k = 9
// console.log(a, b, c, a === c)
// --------------------------------------
// const user = {
//   name: 'hi',
//   age: 85,
//   emails: ['aaa@naver.com']
// }
// const copyUser = Object.assign({}, user)
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user) //22
// console.log('copyUser', copyUser) //85

// console.log('-------')
// console.log('-------')
// --------------------------------------
// const user = {
//   name: 'hi',
//   age: 85,
//   emails: ['aaa@naver.com']
// }
// // ...user -> 객체는 복사되어 정의되지만 배열은 같은주소의 배열을 공유하게 된다.
// const copyUser = {...user}
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user) //22
// console.log('copyUser', copyUser)

// user.emails.push('bbb@naver.com')
// console.log(user.emails === copyUser.emails) //true
// console.log('user', user) // 이메일 같음
// console.log('copyUser', copyUser) // 이메일 같음
// --------------------------------------
// 참조형 데이터를 깊은 복사를 하기 위한 방법 : lodash 패키지도움을 받자!
// 참조데이터 안에 또 다른 참조데이터가 들어있으면 깊은 복사를 해야한다.
const user = {
  name: 'hi',
  age: 85,
  emails: ['aaa@naver.com']
}

// cloneDeep : 깊은 복제
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user) /
console.log('copyUser', copyUser)

user.emails.push('bbb@naver.com')
console.log(user.emails === copyUser.emails) 
console.log('user', user) 
console.log('copyUser', copyUser) 