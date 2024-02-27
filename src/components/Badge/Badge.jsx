import React, { Children } from 'react'
import './Badge.scss'

function Badge({
  children,
  icon,
  variant='default',
  classNames,
  
}) {
  return (
    <div className={`flex justify-center items-center py-1 px-2 text-xs font-medium space-x-1 rounded-xl ${classNames} ${variant}`}>
      {icon ? (
        <span className='flex justify-center items-center'>{icon}</span>
      ) : null}
      { children ? (
              <span className='font-medium'>{children}</span>
      ) : null }
    </div>
  )
}

export default Badge
