import React, { useContext, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AppContext } from '../context';

const ResultLink = () => {

    const {shortLink, isLoading, error, copied, setCopied} = useContext(AppContext);

  if(isLoading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Something went wrong :( </p>
  }


  return (
    <>
      {shortLink && (
        <div className="result">
          <p>{shortLink}</p>
          <CopyToClipboard
            text={shortLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  )
}

export default ResultLink

