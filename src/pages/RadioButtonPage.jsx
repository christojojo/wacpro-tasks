import React from 'react'
import RadioButton from '../components/Radio/RadioButton'

function RadioButtonPage() {
  return (
    <div className='element-wrap'>
        <div>
        <RadioButton label={'Regular'} Name={'options'}  id={'regular'}/>
        </div>
        <div>
        <RadioButton label={'Medium'} Name={'options'}  id={'medium'}/>
        </div>
        <div>
        <RadioButton label={'Large'} Name={'options'}  id={'large'}/>
        </div>
    </div>
  )
}

export default RadioButtonPage
