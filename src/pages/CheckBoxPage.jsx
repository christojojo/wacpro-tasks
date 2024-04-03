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
        <CheckboxDemo isToggle='true' size={'lg'}/>
        </span>
        <span>
        <CheckboxDemo isToggle='true' size={'lg'}/>
        </span>
      </div>
      <div className='flex gap-[15px] justify-center mb-[11px]'>
        <CheckboxDemo isToggle='true' size={'sm'}/>
        <CheckboxDemo isToggle='true' size={'sm'}/>
      </div>
      <div className='flex  mb-[12px] p-[20px]'>
      <CheckboxDemo labelR={'name'} size={'lg'} id={'age'}/>
      </div>
      <div className='flex  mb-[12px] p-[20px]'>
      <CheckboxDemo label={'name'} size={'sm'} id={'age2'}/>
      </div>

    </div>

    <div className='flex flex-col justify-flex-start items-center px-[20px] gap-[10px]'>
    <CheckboxDemo  id={'age'} size={'lg'} />
    <CheckboxDemo  id={'age'} size={'lg'} />
    <CheckboxDemo  id={'age'} size={'sm'} />
    <CheckboxDemo  id={'age'} size={'sm'} />
    </div>
    </div>
  </div>
  )
}

export default CheckboxPage
