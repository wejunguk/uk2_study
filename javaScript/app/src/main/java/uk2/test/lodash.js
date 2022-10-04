import _ from 'lodash' // from 'node_modules

// uniqBy(a, b) : a 중복된 데이터 b 중복을 구분할 속성
// unionBy(a, b, c) : a와 b 배열을 합친 후 c를 기준으로 구분함
// const userA = [
//   {
//     userId: '1',
//     name: 'hi1'
//   },
//   {
//     userId: '2',
//     name: 'hi2'
//   },
// ]
// const userB = [
//   {
//     userId: '1',
//     name: 'hi1'
//   },
//   {
//     userId: '3',
//     name: 'amy'
//   },
// ]
// const userC = userA.concat(userB)
// console.log('concat', userC)
// console.log('uniqBy', _.uniqBy(userC, 'userId'))

// const userD = _.unionBy(userA, userB, 'userId')
// console.log('unionBy', userD)
// --------------------------------------

const users = [
  {
    userId: '1', name: 'hi1'
  },
  {
    userId: '2', name: 'hi2'
  },
  {
    userId: '3', name: 'hi3'
  },
  {
    userId: '4', name: 'hi4'
  },
  {
    userId: '5', name: 'hi5'
  },
]

const foundUser = _.find(users, { name: 'hi3' })
const foundUserIndex = _.findIndex(users, { name: 'hi3' })
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'hi1' })
console.log(users)