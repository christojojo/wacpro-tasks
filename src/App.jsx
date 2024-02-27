// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Badge from './components/Badge/Badge'
import Button from './components/Button'
 import Input from './components/Input/Input'

function App() {
  const [isPassword, setPassword] = useState(true)

  return (
    <>
    <div className='mx-auto max-w-sm'>
    <div className='flex justify-center font-semibold text-3xl'>
      <h1 className='pt-3'>Dynamic Elements</h1>      
      </div>
      <h2 className='flex justify-center font-semibold py-2 text-2xl'>Button</h2>
    <div className='flex justify-center py-5 gap-5'>
    <Button variant='primary'  icon={<img className='h-[18px] w-[18px]' src='../src/assets/icon-white.svg'/>}>Text</Button>
    <Button variant='primary' >Text</Button>
    <Button variant='primary'  iconR={<img className='h-[18px] w-[18px]' src='../src/assets/icon-white.svg'/>}>Text</Button>
    </div>
    <div className='flex justify-center gap-5'>
      <Button variant='secondary' classNames={'border border-black'} icon={<img className='h-[18px] w-[18px]' src='../src/assets/icon-dark.svg' />}>Text</Button>
      <Button variant='secondary' classNames={'border border-black'}>Text</Button>
      <Button variant='secondary' classNames={'border border-black'} iconR={<img className='h-[18px] w-[18px]' src='../src/assets/icon-dark.svg' />}>Text</Button>
    </div>
    <div className='flex flex-col justify-center font-semibold  pt-4 space-y-2'>
      <h1 className='mb-6 text-center text-2xl'>Badge</h1>
      <div className='flex justify-center gap-3'>
        <Badge variant='default' icon={<img src='../src/assets/badge-icon.svg'/>}>Badge Text</Badge>
        <Badge variant='default'>Badge Text</Badge>
        <Badge variant='default' icon={<img src='../src/assets/badge-icon.svg'/>}></Badge>
      </div>
      <div className='flex justify-center gap-3'>
        <Badge variant='pending' icon={<img src='../src/assets/badge-icon.svg'/>}>Badge Text</Badge>
        <Badge variant='pending'>Badge Text</Badge>
        <Badge variant='pending' icon={<img src='../src/assets/badge-icon.svg'/>}></Badge>
      </div>
      <div className='flex justify-center gap-3'>
        <Badge variant='warning' icon={<img src='../src/assets/badge-icon.svg'/>}>Badge Text</Badge>
        <Badge variant='warning'>Badge Text</Badge>
        <Badge variant='warning' icon={<img src='../src/assets/badge-icon.svg'/>}></Badge>
      </div>
      <div className='flex justify-center gap-3'>
        <Badge variant='complete' icon={<img src='../src/assets/badge-icon.svg'/>}>Badge Text</Badge>
        <Badge variant='complete'>Badge Text</Badge>
        <Badge variant='complete' icon={<img src='../src/assets/badge-icon.svg'/>}></Badge>
      </div>
      <div className='flex justify-center gap-3'>
        <Badge variant='critical' icon={<img src='../src/assets/badge-icon.svg'/>}>Badge Text</Badge>
        <Badge variant='critical'>Badge Text</Badge>
        <Badge variant='critical' icon={<img src='../src/assets/badge-icon.svg'/>}></Badge>
      </div>
      <div className='flex justify-center gap-3'>
        <Badge variant='cancelled' icon={<img src='../src/assets/badge-icon.svg'/>}>Badge Text</Badge>
        <Badge variant='cancelled'>Badge Text</Badge>
        <Badge variant='cancelled' icon={<img src='../src/assets/badge-icon.svg'/>}></Badge>
      </div>
    </div>
    </div>

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
    </>
  )
}

export default App
