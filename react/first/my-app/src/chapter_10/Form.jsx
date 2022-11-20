// input 
// <input type="text" value={value} onChange={handleChange} />

import { useState } from "react"

// textarea
// <textarea value={value} onChange={handleChange}></textarea>

// select
<select value={value} onChange={handleChange}>
  <option value="apple">사과</option>
  <option value="banan">바나나</option>
  <option value="grape">포도</option>
  <option value="watermelon">수박</option>
</select>


// 다중 state 선택
function Reservation(props) {
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGUest] = useState(0);

  const handleSubmit = (event) => {
    alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
    event.preventDefault(); // submit과 동시에 새로고침 되는걸 막아줌
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아침식사 여부: 
        <input type="checkbox" checked={haveBreakfast}
        onChange={(event) => {
          setHaveBreakfast(event.target.checked);
        }}/>
      </label>
      <label>
        방문객 수: 
        <input type="number" value={numberOfGuest}
        onChange={(event) => {
          setNumberOfGUest(event.target.value);
        }}/>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

// vlaue값을 넣되 자유롭게 입력값을 넣게 하고싶으면
ReactDOM.render(<input value="hi" />, rootNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, rootNode);
}, 1000);