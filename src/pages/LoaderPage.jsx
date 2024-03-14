import React, { useState } from 'react'
import Loader from '../components/Loader/Loader'
import Button from '../components/Button';

function LoaderPage() {
//     const [text,setText]=useState(""); // for input data
//     const [todos,setTodos]=useState([]); // for listing of todo

// const addTodo = ()=>{
//   if(text !== "" ){
//     setTodos([...todos,text])
//     setText("")
//   }
// }

  return (
    // <div className='element-wrap'>
    //   <div className='pt-6'>
    //     <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}  placeholder='create a new todo' className='border p-4 rounded-sm' />
    //     <Button onClick={()=>{addTodo()}} classNames={'mt-5 w-full'} variant='primary' >Add</Button>

    //     <div>
    //         <ul>
    //             {todos?.map((item)=>{
    //                 return item + " ,"
    //             })}
    //         </ul>
    //     </div>  
    //   </div>
    // </div>


    <div className='element-wrap'>
      <h1 className='pb-3 text-lg font-semibold'>loader</h1>
        <Button loading='true' children={'loader demo'} variant='primary'></Button>
        
    </div>
  )
}

export default LoaderPage




