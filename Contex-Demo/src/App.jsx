import React from 'react'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import User1 from './components/User1'
import User2 from './components/User2'

function App() {
  return (
    <div className='flex items-center mt-6 justify-around'>
      <A/>
      <B/>
      <C/>
      {/* <User1/>
      <User2/> */}
    </div>
  )
}

export default App