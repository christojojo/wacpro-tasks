import React from 'react'
import './loader.scss'

function Loader({variant}) {
  return (
    <span className={`loader ${variant}`}></span>
  )
}

export default Loader
