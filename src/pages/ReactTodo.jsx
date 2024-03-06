import React, { useState } from 'react'

function ReactTodo() {

const [todo,setTodo]=useState('');   // to store input data
const [todos,setTodos]=useState([]); // to store the list todos


const addTodo=()=>{
     if(todo !== "" ){
      setTodos([...todos,todo])
      setTodo("")
     }
}

const deleteTodo = (index) => {
const updatedTodos = [...todos];
updatedTodos.splice(index,1);
setTodos(updatedTodos);
}

console.log(todos);

  return (
    <div className='mt-20 w-[325px]'>
    <h1 className='font-bold text-2xl mb-3'>TodoList</h1>
    <div className='input-wrapper bg-slate-500 p-4 rounded '>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='create a new todo' className='border placeholder:text-sm placeholder:pl-1 focus:outline-none p-1 pl-2 rounded-md w-[250px]'/>
        <button onClick={addTodo} className='bg-green-500 mt-3 px-3 py-1 rounded text-white ml-2' >+</button>
    </div>

    <div className='list text-white  rounded p-4 mt-3 bg-slate-500 '>
        <p className='font-medium decoration-1 text-center text-md'>List of Todos</p>        
        <ul className="text-left list-decimal ml-5">
 
          {todos?.map((item,i) => (<div className="flex justify-between items-center py-1 border-b-2">
            <li className="mb-1" key={i}>{item}</li> 
              <button onClick={()=> {deleteTodo(i)}} className="bg-red-500 text-white px-2  rounded flex justify-center items-baseline">x</button></div>))}
        </ul>
    </div>
    
    </div>
  )
}

export default ReactTodo
