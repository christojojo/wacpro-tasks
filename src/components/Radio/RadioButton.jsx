import React from 'react'

function RadioButton({labelR,label,id,Name,...props}) {
  return (
    <div className='flex justify-left items-center'>
    {/* {label && <label htmlFor={id}>{label}</label>} */}
    <input type='radio' id={id} name={Name}  className='' {...props}/>
    {label && <label htmlFor={id} className='pl-2'>{label}</label>}
    </div>
  )
}

export default RadioButton
