import React, { useContext, useState } from 'react'
import { AppContext } from '../context'

const InputShortener = () => {

 const {value, onchange, handleOnClick} = useContext(AppContext);

  return (
    
      <div className='inputcontainer'>
      <h1>URL <span>Shortner</span> </h1>
      <div>
      <input type='text' placeholder='peaste a link to shorten it ' value={value} onChange={onchange}></input>
      <button onClick={handleOnClick}>Shorten</button>

      </div>
        
      </div>
   
  )
}

export default InputShortener
