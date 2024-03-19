import React from 'react'
import './calculator.css'
import { useState } from 'react'

function Calculator() {

    const [ input , setInput ] = useState('')

    const handleClick=(e)=>{
        console.log(e);
    
    }
    console.log(input);
  return (
    <div className='element-wrap text-center '>
        <div className='w-[182px]'>

      <h1 className='text-lg font-semibold pb-3 text-center'>Calculator</h1>

      <div className='flex flex-col justify-center'>
        <input type="text" value={input} readOnly  className='border focus:outline-none p-2 rounded-lg mb-1' />
      <div className='flex flex-wrap justify-center  border rounded *:px-4 *:py-3'>
        <button onClick={handleClick()}>1</button>
        <button onClick={handleClick()}>2</button>
        <button onClick={handleClick()}>3</button>
        <button onClick={handleClick()}>/</button>
        <button onClick={handleClick()}>4</button>
        <button onClick={handleClick()}>5</button>
        <button onClick={handleClick()}>6</button>
        <button onClick={handleClick()}>*</button>
        <button onClick={handleClick()}>7</button>
        <button onClick={handleClick()}>8</button>
        <button onClick={handleClick()}>9</button>
        <button onClick={handleClick()}>-</button>
        <button onClick={handleClick()}>0</button>
        <button onClick={handleClick()}>=</button>
        <button onClick={handleClick()}>+</button>
        <button onClick={handleClick()}>c</button>
      </div>
      </div>
      </div>

    </div>
  )
}

export default Calculator
