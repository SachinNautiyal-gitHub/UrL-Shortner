
import { useState } from 'react';
import './App.css';
import Background from './Components/Background';
import InputShortener from './Components/InputShortener';
import ResultLink from './Components/ResultLink';

function App() {

   const [inputValue , setInputValue] = useState("");


  return (
     <>
     <div className='container'>
     <InputShortener setInputValue={setInputValue}/>
     <Background/>
     <ResultLink inputValue={inputValue}/>
     </div>
     </>
  );
}

export default App;
