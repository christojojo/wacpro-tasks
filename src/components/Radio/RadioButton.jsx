import React from 'react'
import './radiobutton.scss'

function RadioButton({labelR,label,id,Name,variant,labelClass,inputClass,...props}) {
  return (
    <div className='flex justify-left items-center'>
    {/* {label && <label htmlFor={id}>{label}</label>} */}
    <input type='radio' id={id} name={Name} className={`${variant} ${inputClass} `} {...props}/>
    {label && <label htmlFor={id} className= {`pl-2 ${labelClass}`}>{label}</label>}
    </div>
  )
}

export default RadioButton
