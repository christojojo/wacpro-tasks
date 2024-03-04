import React from 'react'
import './checkbox.scss'

function CheckboxDemo({ id, label, variant, isToggle, ...props }) {

  return (
    <div className='element-wrap'>
      <div className='flex justify-center items-center whitespace-nowrap'>
      <label htmlFor={id} className='text-md '>{label}</label>
      <input id={id} type="checkbox" className={`${variant} bg-no-repeat appearance-none checked:bg-primary transition-all ease-in ${label ? 'ml-4':'ml-0'}
                                                 ${isToggle ? `rounded-[50px] bg-[#E2E8F0] bg-[12%] checked:bg-[88%] `
                                              : `rounded-[3px] bg-center border-2 border-[#E2E6E9]  checked:border-0  bg-checkMark` } `} />
      </div>
    </div>
  )
}

export default CheckboxDemo
