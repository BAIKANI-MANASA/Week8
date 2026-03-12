import {useContext,useEffect,useRef} from 'react'
import { CounterContext} from '../context/CounterContext'

function A() {
  let inputRef = useRef(null);
  const { counter1, counter2, changeCounter1, changeCounter2 } = useContext(CounterContext);
  console.log("componetA rendered");
  
  useEffect(() => {
    //side effect
    inputRef.current.focus();
  }, []);
  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white p-8'>
      <p className='text-4xl font-semibold tracking-tight text-black mb-8'>
        Component A
      </p>
      
      <div className='w-full max-w-md space-y-8'>
        <div className=' border-gray-300 pb-6'>
          <p className='text-lg font-semibold text-gray-700 mb-4'>Counter1: {counter1}</p>
          <button
            onClick={changeCounter1}
            className='w-full bg-black hover:bg-black rounded-3xl text-white font-semibold py-2 px-4  transition'
          >
            Change Counter
          </button>
        </div>
        
        <div className=' border-gray-300 pb-6'>
          <p className='text-lg font-semibold text-gray-700 mb-4'>Counter2: {counter2}</p>
          <button
            onClick={changeCounter2}
            className='w-full bg-black hover:bg-black rounded-3xl text-white font-semibold py-2 px-4  transition'
          >
            Change Counter
          </button>
        </div>
        
        <input
          ref={inputRef}
          type='text'
          className='w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:block-'
        />
      </div>
    </div>
  );
}

export default A