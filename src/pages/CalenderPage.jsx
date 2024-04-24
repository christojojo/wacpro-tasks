import React from 'react'
import Calender from '../components/Calender/Calender'
import CalenderAside from '../components/CalenderAside/CalenderAside'

function CalenderPage() {
  return (
    <div className='flex w-full pt-[60px]'>
      <div className='flex flex-grow'>
      <Calender></Calender>
      </div>
      <div className='max-w-[350px] xl:max-w-[420px]  w-full'>
      <CalenderAside/>
      </div>
    </div>
  )
}

export default CalenderPage
