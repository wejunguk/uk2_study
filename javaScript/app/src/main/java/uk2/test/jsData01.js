// JS 데이터

// String: '', '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}
// --------------------------------------
// indexOf() : 주어진 값과 일치하는 첫 번째 인덱스를 반환 
String.prototype.indexOf() 
const result = 'Hello world!'.indexOf('world')
console.log(result) // 6

// length : 글자길이 
// const str = '0123'
// console.log(str.length) //4

// 주어진 값과 일치하는 값이 없으면 -1 반환
// const str = 'Hello world'
// console.log(str.indexOf('hi')) // -1
// --------------------------------------
// slice : 첫번째 자릿수부터 종료점 인덱스로 그 직전까지 추출
// const str = 'Hello world'
// console.log(str.slice(6, 11)) // world
// --------------------------------------
// replace : 첫번째 문자대신 두번째 문자로 수정
// const str = 'Hello world'
// console.log(str.replace('world', 'hi')) // Hello hi

// const str = 'Hello world'
// console.log(str.replace(' world', '')) // Hello
// --------------------------------------
// match : 원하는 값 추출
// const str = 'abcd@naver.com'
// console.log(str.match(/.+(?=@)/)[0]) // abce
// --------------------------------------
// trim : 공백 제거
// const str = '    Hello world  '
// console.log(str.trim())


