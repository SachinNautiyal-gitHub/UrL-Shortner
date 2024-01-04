

import React, { useEffect, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({children})=>{

  const [value, setValue] = useState();
  const [shortLink, setShortLink] = useState();
  const [isLoding,setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error , setError] = useState(false);
  const [inputValue , setInputValue] = useState("");


  const handleOnClick = ()=>{
       setInputValue(value);
       console.log(value);

  }

  useEffect(()=>{
    setValue()
  },[value]);
  

  const onChange = (e)=>{
      setValue(e.target.value);
  }

   return <AppContext.Provider  value={{value, shortLink, isLoding, copied,setCopied, handleOnClick, onChange}} >{children}</AppContext.Provider>
}


export { AppContext, AppProvider };