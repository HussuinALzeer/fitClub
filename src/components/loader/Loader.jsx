import React from 'react'
import { Triangle } from 'react-loader-spinner'
import './loader.scss'
const Loader = () => {
  return (
    <div className='loader' >
        
        <Triangle
  height="80"
  width="80"
  radius="9"
  color="orange"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    </div>
  )
}

export default Loader