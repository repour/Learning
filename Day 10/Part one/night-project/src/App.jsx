import { useState } from 'react'
import './App.css'

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);
  
  const sum1 = (event) => {
    setNumberOne(event.target.value);
    setResult(Number(event.target.value) + Number(numberTwo));
  }
  const sum2 = (event) => {
    setNumberTwo(event.target.value);
    setResult(Number(event.target.value) + Number(numberOne));
  }
  return (
    <>
      <div>
      <input className='number-one' value={numberOne} onChange={sum1}/>
      <input className='number-two' value={numberTwo} onChange={sum2}/>
      </div>
      <div id='result'>{result}</div>


    </>
  )
}

export default App
