const add = (a, b) =>  a + b;

function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5); // 8
calculator(add, 3, 5);

// const onClick = () => () => {
//   console.log('hello')
// }

const onClick = () => {
  retrun () => {
    console.log('hello');
  };
}