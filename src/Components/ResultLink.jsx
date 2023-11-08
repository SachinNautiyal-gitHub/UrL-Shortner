import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ResultLink = () => {
 
    const [shortlink, setShortlink] = useState("Hello world");

  return (
    <div className="result">
      <p>{shortlink}</p>
      <button>copy to clipbord</button>
    </div>
  )
}

export default ResultLink
