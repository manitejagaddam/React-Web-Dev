import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Custome Build Counter</h1>
      <h1>Counter {count}</h1>

      <button onClick= {() =>{
        setCount(count + 1);
      }}>Increase</button>
      <button onClick={() =>{
        if(count <= 0){
          setCount(0);
        }else{
          setCount(count - 1);
        }
      }}>Decrease</button>

    </>
  )
}

export default App
