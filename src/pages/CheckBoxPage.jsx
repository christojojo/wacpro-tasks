import React from 'react'
import CheckboxDemo from '../components/CheckBox/CheckboxDemo'

function CheckboxPage() {
  return (
    <div>

      <h1 className='font-semibold text-3xl my-4 pt-8'>Checkbox</h1>
      <div className='flex gap-8 items-start'>
        <CheckboxDemo label={'Name'} id={'demo'} variant={'checkbox-sm'}/>
        <CheckboxDemo label={'name'} id={'age'} variant={'checkbox-lg'}/>
        <CheckboxDemo variant={'checkbox-sm'}/>
        <CheckboxDemo variant={'checkbox-lg'}/>

        
    </div>
    <div className='flex gap-8 items-start'>
    <CheckboxDemo isToggle='true' label={'toggle-sm'} variant={'toggle-sm'}/>
    <CheckboxDemo isToggle='true'  variant={'toggle-sm'}/>
    <CheckboxDemo isToggle='true' label={'toggle-lg'} variant={'toggle-lg'}/>
    <CheckboxDemo isToggle='true'  variant={'toggle-lg'}/>
   
    </div>
    </div>
  )
}

export default CheckboxPage
