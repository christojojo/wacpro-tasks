import React from 'react'
import Tooltip from '../components/Tooltip/Tooltip'

const TooltipPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <Tooltip text="This is a tooltip">
      <button className="p-2 bg-blue-500 text-white rounded">Hover me</button>
    </Tooltip>
  </div>
  )
}

export default TooltipPage
