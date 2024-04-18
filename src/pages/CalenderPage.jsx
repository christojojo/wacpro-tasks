import React from 'react'
import Calender from '../components/Calender/Calender'

function CalenderPage() {
  return (
    <div className='flex w-full pt-[50px]'>
      <div className='flex flex-grow'>
      <Calender></Calender>
      </div>
      <div className='max-w-[420px] w-full pl-3'>
        Leave
      </div>
    </div>
  )
}

export default CalenderPage
