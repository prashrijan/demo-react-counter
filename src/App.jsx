import { useState } from 'react'
import './App.css'

function App() {

  const[counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(prevCounter => prevCounter >= 20 ? 0 : prevCounter + 1)
  }
  const resetCount = () => {
    setCounter(prevCounter => prevCounter = 0)
  }
  const decreaseCount = () => {
    setCounter(prevCounter => prevCounter <=0 ? 0 : prevCounter - 1)
  }

  return (
    <>
      <div className="counter-container">
        <h2>Demo Counter Project</h2>
        <h2>Counter Value: {counter}</h2>
        <div className="buttons">
          <button className='increase' onClick={increaseCount}>Increase</button>
          <button className='reset' onClick={resetCount}>Reset</button>
          <button className='decrease' onClick={decreaseCount}>Decrease</button>
        </div>
      </div>
    </>
  )
}

export default App
