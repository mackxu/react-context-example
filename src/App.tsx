import { useState } from 'react'
import StateContext from './context'
import GeneralC from './consumer/GeneralC'
import FnC from './consumer/FnC'
import ClassC from './consumer/ClassC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StateContext.Provider value={{ title: 'react context example', count, setCount }}>
      <GeneralC></GeneralC>
      <FnC></FnC>
      <ClassC></ClassC>
    </StateContext.Provider>
  )
}

export default App
