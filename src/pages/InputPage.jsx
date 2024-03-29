import React from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button'
import { useState } from 'react'
import Modal from '../components/Modal/Modal';


function InputPage() {
    const [isPassword, setPassword] = useState(true);

  return (
    <div className='element-wrap'>
      
      <div className='max-w-lg mx-auto'>
    <div className='flex flex-col items-center justify-center font-semibold  pt-4 space-y-2'>
      <h1 className='font-semibold text-2xl my-4'>Input</h1>
      <div>
        <Input type={'email'} label={'Email Address'} errorMsg={'Invalid input data'}></Input>        
        <Input 
        type={isPassword ? 'password' : 'text'}
        label={'Password'} 
        
        iconR={
          <Button onClick={()=>{
            setPassword(state => !state )
          }}>
            {isPassword ? 'visibility' : 'visibility_off' }
          </Button>
        }
        ></Input>
        <Input type={'text'} label={'Full Name'} ></Input>
        <Input type={'number'} label={'Mobile Number'}  ></Input>
        <Input type={'text'}   iconR='search'></Input>
        <Input type={'search'} icon='search' placeholder={'search this table'}/>
        <Input type={'search'} icon={'search'} placeholder={'search the table'}  darkplaceholder='true'></Input>
      </div>
      <div>
        
      </div>
    </div>
    </div>
    </div>
  )
}

export default InputPage
