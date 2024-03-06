import React from 'react'
import CheckboxDemo from '../components/CheckBox/CheckboxDemo'

function CheckboxPage() {
  return (
    <div>
      <h1 className='font-semibold text-3xl my-4 pt-8'>Checkbox</h1>
<div className='flex '>
   <div className='p-[20px]'>
      <div className='flex gap-[15px] justify-center mb-[12px]'>
        <span>
        <CheckboxDemo isToggle='true'  variant={'toggle-lg'}/>
        </span>
        <span>
        <CheckboxDemo isToggle='true'  variant={'toggle-lg'}/>
        </span>
      </div>
      <div className='flex gap-[15px] justify-center mb-[11px]'>
        <CheckboxDemo isToggle='true'  variant={'toggle-sm'}/>
        <CheckboxDemo isToggle='true'  variant={'toggle-sm'}/>
      </div>
      <div className='flex  mb-[12px] p-[20px]'>
      <CheckboxDemo labelR={'name'} id={'age'} variant={'checkbox-lg'}/>
      </div>
    </div>

    <div className='flex flex-col justify-flex-start items-center px-[20px] gap-[10px]'>
    <CheckboxDemo  id={'age'} variant={'checkbox-lg'}/>
    <CheckboxDemo  id={'age'} variant={'checkbox-lg'}/>
    <CheckboxDemo  id={'age'} variant={'checkbox-sm'}/>
    <CheckboxDemo  id={'age'} variant={'checkbox-sm'}/>
    </div>
    </div>

    
    </div>
  )
}

export default CheckboxPage
