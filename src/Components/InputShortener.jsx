import React, { useState } from 'react'

const InputShortener = ({setInputValue}) => {

 const [value, setValue] = useState("");

 const onchage = (e)=>{
    setValue(e.target.value);
 }
  
 const handleOnClick = () => {
     setInputValue(value);
     setValue("");
 }

  return (
    
      <div className='inputcontainer'>
      <h1>URL <span>Shortner</span> </h1>
      <div>
      <input type='text' placeholder='peaste a link to shorten it ' value={value} onChange={onchage}></input>
      <button onClick={handleOnClick}>Shorten</button>

      </div>
        
      </div>
   
  )
}

export default InputShortener
