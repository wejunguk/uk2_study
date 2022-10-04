/// 함수 복습
// function sum(a, b) {
//   console.log(a + b)
// }

// sum(1, 3)
// sum(4, 12)

// function sum2(a, b) {
//   return a + b
// }

// const x = sum2(1, 4)
// const y = sum2(5, 3)

// console.log(x)
// console.log(y)
// console.log(sum2(1, 4))
// --------------------------------------
/// 화살표 함수
// () => {}  VS  function () {}

// const double = function (x) => {
//   return x * 2
// }
// =
// const double = (x) => {
//   return x * 2
// }
// // =
// const double = x => x * 2
// --------------------------------------
// 객체 데이터 반환시 ()안에 객체 작성해야함
// const double = x => ({
//   name: 'hi'
// })

// const double = function (x, y) => {
//   return x * 2
// }
// =
// const double = (x, y) => {
//   return x * 2
// }
// // =
// const double = (x, y) => x * 2
// --------------------------------------
/// 즉시 실행 함수 IIFE
// const a = 7
// function double() {
//   console.log(a * 2)
// }

// double();
// // =
// (function () {
//   console.log(a * 2)
// })();
// // =
// (function () {
//   console.log(a * 2)
// }());
// --------------------------------------
/// 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌려올려지는 현상
// const a = 7

// double()

// const double = function () {
//   console.log(a * 2)
// } // 실행 안됨!

// const a = 7

// double() // 호출 먼저 된다!

// function double () {
//   console.log(a * 2)
// }
// --------------------------------------
/// 타이머함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() :  설정된 timeout 함수 종료
// clearInterval() : 설정된 interval 함수 종료

// const timer = setInterval(() => {
//   console.log('happy')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearInterval(timer)
// })
// --------------------------------------
/// 콜백
// 함수의 인수로 사용되는 함수 setTimeout(함수, 시간)
// function timeout(cb) {
//   setTimeout(() => {
//     console.log('happy')
//     cb()
//   }, 3000)
// }
// timeout(() => {
//   console.log('done')
// })
// --------------------------------------
/// 생성자 함수(prototype)
// 함수를 생성한다 = 하나의 객체 생성, 첫번째글자 대문자 작성
// const hi = {
//   firstName: 'happy',
//   lastName: 'hi',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(hi.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// 중복되는 함수가 많음 => 복잡함

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// const hi = new User('happy', 'hi')
// const amy = new User('Amy', 'Clarke')

// console.log(hi.getFullName())
// console.log(amy.getFullName())
// --------------------------------------
/// this
// 일반 함수는 호출 위치에 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의
// const hi = {
//   name: 'happy',
//   normal: function () {
//     console.log(this.name) 
//   },
//   arrow: () => {
//     console.log(this.name) 
//   }
// }
// hi.normal() // happy
// hi.arrow() // undefined

// const amy = {
//   name: 'amy',
//   normal: hi.normal,
//   arrow: hi.arrow
// }

// amy.normal() // undefined
// amy.arrow() // amy


// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const hi = new User('hi')

// hi.normal() // hi
// hi.arrow() // undefined

const timer = {
  name: 'hi',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()

