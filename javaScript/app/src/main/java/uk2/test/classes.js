/// ES6 Classes

// normal: function () {
//   console.log(this.name)
// }
// =
// normal() {
//   console.log(this.name)
// }

// const hi = {
//   name: 'happy',
//   normal() {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// hi.normal()
// hi.arrow()



// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }
// =
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const hi = new User('happy', 'hi')
const amy = new User('Amy', 'Clarke')

console.log(hi)
console.log(hi.getFullName())
console.log(amy.getFullName())