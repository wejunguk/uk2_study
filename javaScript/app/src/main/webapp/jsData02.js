// JS 데이터

// const pi = 3.14159265358979
// console.log(pi) //3.14159265358979

//toFixed : 소수점의 몇번째 자리까지 유지할지, 그 값의 String 반환
// const str = pi.toFixed(2)
// console.log(str) // 3.14
// console.log(typeof str) // String

// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(integer) //3
// console.log(float) //3.14
// console.log(typeof integer, typeof float) //number number
// --------------------------------------
/// Math
// Math.abs() :  주어진 숫자의 절대값을 반환

// console.log('abs: ', Math.abs(-12)) // abs:  12
// console.log('min: ', Math.min(2, 8)) // min: 2
// console.log('max: ', Math.max(2, 8)) // max: 8
// console.log('ceil: ', Math.ceil(3.14)) // ceil: 4 : 올림처리
// console.log('floor: ', Math.floor(3.14)) // floor: 3 : 내림처리
// console.log('round: ', Math.round(3.14)) // round: 3 : 반올림처리
// console.log('random: ', Math.random()) // random: 0.599763 : 랜덤숫자 반환
// --------------------------------------
// 배열
// Array.prototype.find() : 주어진 함수를 만족하는 첫 번째 요소의 값 반환
// const numbers = [1, 2, 3, 4]
// const fruits = ['apple', 'banana', 'cherry']

// console.log(numbers[1]) // 2
// console.log(fruits[2]) // cherry

// .length : 값 길이 확인 -> 0 이면 주어진 값 없음
// console.log([].length) // 0
// console.log([1, 2].length) // 2
// --------------------------------------
// .concat() : 
// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)
// --------------------------------------
// .forEach(a, b) : a: 아이템, b: 아이템갯수=반복 횟수
// fruits.forEach(function (element, i){
//   console.log(element, i)
// })
// --------------------------------------
// .map : 배열을 객체수만큼 반복해 반환된 값을 새로운 배열로 저장
// const a = fruits.forEach((fruit, index) => {
//   console.log(`${fruit}-${index}`)
// })
// console.log(a)

// const b = fruits.map(function (fruit, index){
//   return {
//     id: index,
//     name: fruit
//   }
// })
// // =
// const b = fruits.map((fruit, index) => ({
//   id: index,
//   name: fruit
// }))
// console.log(b)
// --------------------------------------
// .filter() : 배열데이터를 특정기준으로 배열로 필터링 하는 것
// const numbers = [1, 2, 3, 4]
// const fruits = ['apple', 'banana', 'cherry']

// const a = numbers.map(number => {
//   return number < 3
// })
// =
// const a = numbers.map(number => number < 3)
// console.log(a) 
// (4) [true, true, false, false]

// const b = numbers.filter(number => number < 3)
// console.log(b)
// (2) [1, 2]
// --------------------------------------
// .find() .findIndex() : 조건에 맞는 특정한 아이템을 찾을 때 사용
// const a = fruits.find(fruit => /^b/.test(fruit))
// console.log(a)

// const b = fruits.findIndex(fruit => /^b/.test(fruit))
// console.log(b)
// --------------------------------------
// .includes() : 배열에 특정 데이터가 포함되어 있는지
// const a = numbers.includes(3)
// console.log(a)

// const b = fruits.includes('hi')
// console.log(b)
// --------------------------------------
// push() : 배열데이터 가장 뒤에 데이터 삽입 원본이 수정됨!
// .unshift() : 배열데이터 가장 앞에 데이터 삽입원본이 수정됨!
// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)
// --------------------------------------
// reverse() : 배열의 순서가 뒤집어짐 원본이 수정됨!
// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)
// --------------------------------------
// splice(a, b, c) : a:인덱스 값 b:지울아이템 c: 그 자리에 끼어넣어라 갯수 원본이 수정됨!

// numbers.splice(2, 1)
// numbers.splice(2, 0, 999) 
// // (5) [1, 2, 999, 3, 4]

// console.log(numbers)

// fruits.splice(2, 0, 'orange')
// console.log(fruits)
// (4) ['apple', 'banana', 'orange', 'cherry']
