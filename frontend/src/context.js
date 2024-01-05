

import React, { useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({children})=>{

  const [value, setValue] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [isLoding,setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error , setError] = useState(false);


  const handleOnClick =  async()=>{
       
      setIsLoading(true);
        const data = await fetch(`http://localhost:5000/url`,{
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body:JSON.stringify({url:value})
         });
        
      
   
      const res = await data.json();
      setShortLink(res.id);
      setIsLoading(false);
      
  }
  

  const onchange = (e)=>{
      setValue(...[e.target.value]);
  }

   return <AppContext.Provider  value={{value, shortLink, isLoding,error, copied,setCopied, handleOnClick, onchange}} >{children}</AppContext.Provider>
}


export { AppContext, AppProvider };