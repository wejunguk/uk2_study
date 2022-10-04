
// 다른 파일의 js 가지고오기
// import 이름 from '경로'
import getType from './getType'

console.log(typeof 'Hello World!');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));