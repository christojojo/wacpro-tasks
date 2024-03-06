import React from 'react'
import CheckboxDemo from '../components/CheckBox/CheckboxDemo'

function CheckboxPage() {
  return (
    <div className='flex flex-col gap-12'>
      <h1 className='font-semibold text-3xl my-4 pt-8'>Checkbox</h1>
        <CheckboxDemo label={'Name'} id={'demo'} variant={'checkbox-sm'}/>
        <CheckboxDemo label={'name'} id={'age'} variant={'checkbox-lg'}/>
        <CheckboxDemo variant={'checkbox-sm'}/>
        <CheckboxDemo variant={'checkbox-lg'}/>

        
    <CheckboxDemo isToggle='true' label={'toggle-sm'} variant={'toggle-sm'}/>
    <CheckboxDemo isToggle='true'  variant={'toggle-sm'}/>
    <CheckboxDemo isToggle='true' label={'toggle-lg'} variant={'toggle-lg'}/>
    <CheckboxDemo isToggle='true'  variant={'toggle-lg'}/>
   
    </div>
  )
}

export default CheckboxPage
