import React, { useState } from 'react';
import './Input.scss';

function Input({ label, icon, iconR, placeholder, type }) {
  // const [inputType, setInputType] = useState(type);

  // const togglePasswordVisibility = () => {
  //   setInputType(inputType === 'password' ? 'text' : 'password');
  //   // document.getElementById('password-icon').innerHTML = input.type === 'password' ? iconR : icon;
  // };

  return (
    <div className='flex flex-col space-y-1 mb-3.5'>
      {label && <label htmlFor="">{label}</label>}
      <div className='relative'>
        {icon && (
          <span className='absolute -translate-y-1/2 top-1/2 left-[10px] '>{icon}</span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-96 font-medium text-[14px] leading-4 border pl-${icon ? "8" : "4" }   py-[11px] pr-8 rounded border-input focus:outline-none`}
        /> 
        {iconR && (
          <span className='absolute -translate-y-1/2 top-1/2 right-[10px]'>
            {iconR}
          </span>
        )}       
      </div>
    </div>
  );
}

export default Input;
