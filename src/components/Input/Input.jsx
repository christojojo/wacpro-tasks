import React, { useState } from 'react';
import './Input.scss';

function Input({ label, icon, iconR, placeholder, type,props }) {
  
  return (
    <div className='flex flex-col space-y-1 mb-3.5'>
      {label && <label htmlFor="">{label}</label>}
      <div className='relative'>
        {icon && (
          <span className='material-symbols-outlined text-[22px] absolute -translate-y-1/2 top-1/2 left-[10px] '>{icon}</span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-[300px] font-medium text-[14px] leading-4 border  ${icon?'pl-[34px]':'pl-4'} ${iconR?'pr-[34px]':'pr-4'}  py-[11px]  rounded border-input focus:outline-none focus:ring-1 focus:border-transparent`}
          {...props}
        /> 
        {iconR && (
          <span className='material-symbols-outlined text-[22px] absolute -translate-y-1/2 top-1/2 right-[10px]'>
            {iconR}
          </span>
        )}       
      </div>
    
    </div>
  );
}

export default Input;
