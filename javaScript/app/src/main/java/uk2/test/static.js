// 정적메소드 = static

// Object.assign(target, ...sources) : sources를 복사해서 target로 집어넣기
// const userAge = {
//   // key: value
//   name: 'hi',
//   age: 85
// }

// const userEmail = {
//   name: 'hi',
//   email: 'aaa@naver.com'
// }

// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const a = { k: 123 }
// const b = { k: 123 }
// console.log(a === b)
// --------------------------------------
// const target = Object.assign({}, userAge, userEmail)
// -> 출처객체를 빈 객체데이터로 설정
// -> 원본데이터를 손상시키지 않고 새로운 객체에 데이터 작성

// Object.keys: key들만 추출해 새로운 배열로 만듬
const user = {
  // key: value
  name: 'hi',
  age: 85,
  email: 'aaa@naver.com'
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)
