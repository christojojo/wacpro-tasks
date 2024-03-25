import React from 'react'
import LineChart from '../components/LineChart/LineChart'
import MultiLineChart from '../components/MultiLineChart/MultiLineChart'

function LinechartPage() {
  return (
    <div className='pt-20'>
      <div>
      <LineChart/>
      </div>
      <div className='pt-16'>
        <h1 className='mb-12 font-medium text-lg'>MultiLine -Chart</h1>
        <MultiLineChart></MultiLineChart>
      </div>
    </div>
  )
}

export default LinechartPage
