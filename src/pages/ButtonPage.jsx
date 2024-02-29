import React from 'react'
import Button from '../components/Button'

function ButtonPage() {
  return (
    <div>
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
    </div>
    </div>
  )
}

export default ButtonPage