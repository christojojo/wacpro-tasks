import React from 'react'
import RadioButton from '../components/Radio/RadioButton'

function RadioButtonPage() {
  return (
    <div className='element-wrap'>
        <div className='mb-1'>
        <RadioButton label={'small'} labelClass={'text-sm'} Name={'options'} variant={'sm'} id={'small'}/>
        </div>
        {/* <div>
        <RadioButton label={'Medium'} Name={'options'}  id={'medium'}/>
        </div> */}
        <div>
        <RadioButton label={'Large'} Name={'options'} labelClass={'text-md'} variant={'lg'} id={'large'}/>
        </div>  
    </div>
  )
}

export default RadioButtonPage
