
import './App.css';
import Background from './Components/Background';
import InputShortener from './Components/InputShortener';
import ResultLink from './Components/ResultLink';

function App() {
  return (
     <>
     <div className='container'>
     <InputShortener/>
     <Background/>
     <ResultLink/>
     </div>
     </>
  );
}

export default App;
