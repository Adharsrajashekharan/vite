import { useState } from 'react'
import Person from './PersonClass'
const Test = () => {
    const [first, setfirst] = useState(0)
const handleme=()=>{
  console.log("button clicked works")
}
  return (
  <>
  <h1>i am aaaaaaaa</h1>
  <button className='p-2 bg-fuchsia-700 after:bg-white ' onClick={handleme}>
click
  </button>
  </>
  )
}

export default Test
