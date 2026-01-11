import React from 'react'
import BarFeedBAck from '../components/BarFeedBack/BarFeedBAck'
import Assets from '../Common/Asset'

function BarFeedBackPage() {
  return (
    <div className='pt-20 w-full ' >
      <BarFeedBAck icon={<img src={Assets.smiley} alt="" />}/>
    </div>
  )
}

export default BarFeedBackPage
