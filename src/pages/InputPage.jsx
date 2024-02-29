import React from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button'
import { useState } from 'react'


function InputPage() {
    const [isPassword, setPassword] = useState(true)

  return (
    <div>
      <div className='max-w-lg mx-auto'>
    <div className='flex flex-col items-center justify-center font-semibold  pt-4 space-y-2'>
      <h1 className='font-semibold text-2xl my-4'>Input</h1>
      <div>
        <Input type={'email'} label={'Email Address'} placeholder={'Email Address'} ></Input>        
        <Input 
        type={isPassword ? 'password' : 'text'}
        label={'Password'} 
        placeholder={'Password'} 
        iconR={
          <Button onClick={()=>{
            setPassword(state => !state )
          }}>
            {isPassword ? <img src='../src/assets/eye-icon.svg'/> : <img src='../src/assets/badge-icon.svg'/> }
          </Button>
        }
        ></Input>
        <Input type={'text'} label={'Full Name'} placeholder={'Full Name'} ></Input>
        <Input type={'number'} label={'Mobile Number'} placeholder={'Mobile Number'} ></Input>
        <Input type={'text'} iconR={<img src='../src/assets/search-icon.svg'/>}></Input>
        <Input type={'text'} placeholder={'search this table'} iconR={<img src='../src/assets/search-icon.svg'/>}></Input>
        <Input type={'search'} icon={<img src='../src/assets/search-icon.svg'/>} placeholder={'search'}/>
      </div>
      <div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default InputPage
