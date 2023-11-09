import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios'

const ResultLink = ({ inputValue }) => {

  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {

    const options = {
      method: 'GET',
      url: 'https://layurl.p.rapidapi.com/API/write/get',
      params: {
        url: {inputValue}
      },
      headers: {
        'X-RapidAPI-Key': '4fa2668975mshd60b5bee1351d3ap1f63f6jsn61b4528d3214',
        'X-RapidAPI-Host': 'layurl.p.rapidapi.com'
      }
    };
    
    try {
      setLoading(true);
      const response = await axios.request(options);
      const data = response.json();
      console.log(data);
    } catch (error) {
      setError(error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if(loading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Something went wrong :( </p>
  }


  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
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

