import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { useTest } from '../store/TestStore'

function B() {
  const x = useTest((state) => state.x)
  const incrementX = useTest((state) => state.incrementX)
  const incrementByX = useTest((state) => state.incrementByX)
  let { counter1, counter2, changeCounter1, changeCounter2 } = useContext(CounterContext)
  
  console.log('componentB rendered')
  
  const goToApple = () => {
    window.open('https://apple.com', '_blank')
  }
  
  return (
    <div className='text-center bg-white p-10 rounded-3xl'>
      <p className='text-4xl font-semibold text-black'>Component B</p>
      
      <p className='text-xl mt-8 text-gray-700'>
        Counter1: <span className='font-semibold'>{counter1}</span>
      </p>
      <button onClick={changeCounter1} className='bg-black text-white px-6 py-2 mt-3 rounded-full hover:bg-gray-800 transition'>
        Change Counter
      </button>
      
      <p className='text-xl mt-8 text-gray-700'>
        Counter2: <span className='font-semibold'>{counter2}</span>
      </p>
      <button onClick={changeCounter2} className='bg-black text-white px-6 py-2 mt-3 rounded-full hover:bg-gray-800 transition'>
        Change Counter
      </button>
      
      <p className='text-xl text-gray-600 mt-8'>
        X is: <span className='font-semibold text-black'>{x}</span>
      </p>
      <button onClick={incrementX} className='bg-black text-white px-6 py-2 mt-3 rounded-full hover:bg-gray-800 transition'>
        IncrementX
      </button>
      
      <br />
      <button onClick={() => incrementByX(100)} className='bg-black text-white px-6 py-2 mt-3 rounded-full hover:bg-gray-800 transition'>
        Increment By X
      </button>
      <br />
    </div>
  )
}

export default B