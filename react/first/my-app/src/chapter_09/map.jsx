
// map()
// 함수 안에 있는 엘리먼트는 꼭 key가 필요

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((num) => <li>{num}</li>);

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// )



function NumberList(props) {
  const { numbers } = props;

  const listItems = numbers.map((number) => <li>{number}</li>);
  
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
)

// 키 값 사용
// 1. id 사용
const todo = tools.map((todo) => 
  <li key={todo.id}>{todo.text}</li>
)

// 2. index 사용
const todo2 = tools.map((todo, index) =>
  <li key={index}>{todo.text}</li>
)