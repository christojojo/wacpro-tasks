import React from 'react'
import SimpleBarChart from '../components/SimpleBarChart/SimpleBarChart'
import BarChart2 from '../components/BarChart2/BarChart2'

function ChartPage() {
  return (
    <div className='pt-20'>
      <h1 className='text-lg font-medium pb-6'>React Chart Examples</h1>
      <SimpleBarChart/>

      <div className='py-16'>
      <BarChart2/>
      </div>
    </div>
  )
}

export default ChartPage
