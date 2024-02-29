import React from 'react'
import Badge from '../components/Badge/Badge'

function BadgePage() {
  return (
    <div className='flex element-wrap'>
      <div className='flex flex-col  font-semibold  pt-4 space-y-2'>
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
  )
}

export default BadgePage
