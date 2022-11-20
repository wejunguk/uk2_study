import { useState } from "react"

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓어!</p>
  }
  return <p>물 안끓어!</p>
}

function Calculator(props) {
  const [temperature, setTemperature] = useState('');

  const handleChage = (e) => {
    setTemperature(e.target.value);
  }
  
  return (
    <fieldset>
      <legend>섭씨 온도 입력:</legend>
      <input vlaeu={temperature}
        onChange={handleChage} />
      <BoilingVerdict celsius={parseFloat(temperature)}/>
    </fieldset>
  )
}
