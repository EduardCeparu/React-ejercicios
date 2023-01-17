import {useState} from 'react'


export default function Counter() {
    const[counter, setCounter] = useState(0)

    const increase = () => setCounter(counter+1)
    const decrease = () => setCounter(counter-1)
    const reset = () => setCounter(0)
    
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={increase}>INCREASE</button>
        <button onClick={decrease}>DECREASE</button>
        <button onClick={reset}>RESET</button>
    </div>
  )
}
