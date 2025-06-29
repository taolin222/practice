import { useState } from 'react'
import loveMouse from './assets/love-mouse.gif'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={loveMouse}/>
      </div>
      <h1>程帆宝宝</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          老公爱你的次数 {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
