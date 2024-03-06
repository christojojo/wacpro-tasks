import React from 'react'
import './checkbox.scss'

function CheckboxDemo({ id, label,labelR, variant, isToggle, ...props }) {

  return (
    <>
      {label && <label htmlFor={id} className='text-md pr-4'>{label}</label>}
      <input id={id} type="checkbox" className={`${variant} bg-no-repeat align-middle appearance-none checked:bg-primary transition duration-75 ${label ? 'ml-4' : 'ml-0'}
                                                 ${isToggle ? `rounded-[50px] bg-[#E2E8F0] bg-[12%] checked:bg-[88%] `
          : `rounded-[3px] bg-center border-2 border-[#E2E6E9]  checked:border-0  bg-checkMark`} `} />
          {labelR && <label htmlFor={id} className='text-md pl-4'>{labelR}</label>}
    </>
  )
}

export default CheckboxDemo
