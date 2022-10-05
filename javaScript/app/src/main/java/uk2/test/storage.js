// Storage
// 데이터 저장소

import { loc } from "svelte-spa-router"

// Local Storage : 스토리지에 데이터가 따로 지우지 않는 이상만료되지 않음
// setItem : 스토리지에 데이터 추가
// removeItem : 스토리지에 데이터 삭제

// Session Storage : 페이지를 닫을때 데이터 사라짐


const user = {
  name: 'hi',
  age: 85,
  emails: [
    'aaa@naver.com',
    'bbb@naver.com'
  ]
}
// localStorage.setItem('user', user)
// const teUser = JSON.stringify(user) // 2)객체데이터로 바꾸자
// localStorage.setItem('user', JSON.stringify(user)) // 1)문자데이터로 저장되어있음
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

// 데이터 수정하기
const str = localStorage.getItem('user') 
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))