import {useContext} from 'react'
import { CounterContext } from '../context/CounterContext'
import { useTest } from '../store/TestStore'

function CounterSection({ label, value, onClick, isOrange = false }) {
  return (
    <div className=' border-gray-200 pt-3'>
      <p className='text-sm text-black mb-4'>{label}</p>
      <p className={`text-3xl font-semibold mb-6 ${isOrange ? 'text-orange-500' : 'text-black'}`}>{value}
      </p>
      <button 
        onClick={onClick}
        className='px-6 py-3 bg-black hover:bg-black text-white rounded-lg text-sm font-medium transition'
      >
        {isOrange ? 'Increment Y' : 'Change Counter'}
      </button>
    </div>
  );
}

function C() {
  const y = useTest((state) => state.y);
  const incrementY = useTest((state) => state.incrementY);
  const { counter1, counter2, changeCounter1, changeCounter2 } = useContext(CounterContext);
  
  console.log("componentC rendered");

  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-2xl mx-auto px-4 py-20'>
        <h1 className='text-3xl font-semibold tracking-tight text-black mb-6'>Component C</h1>
        <div className='space-y-0'>
          <CounterSection label="Counter 1" value={counter1} onClick={changeCounter1} />
          <CounterSection label="Counter 2" value={counter2} onClick={changeCounter2} />
          <CounterSection label="Value Y" value={y} onClick={incrementY} isOrange={true} />
        </div>
      </div>
    </div>
  );
}

export default C
