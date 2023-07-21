import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';

function App() {
  const[data, setData] = useState(0);

  function getQuote(){
    
    fetch('https://api.quotable.io/random').then(
      response=>response.json().then(
        (quote)=>{
          setData(quote);
        }
        )
      )
      }
  return (
    <div className="App">
      <header className="App-header">

        <h1 className='Title'>Random Quote Generator</h1>
        <h3 className='Quote'>Quote: {data.content}</h3>
        <h5 className='Author'>Author: {data.author}</h5>
        <h5 className='Author'>Tag: {data.tags}</h5>
        <button onClick={getQuote}>Get Quote</button>
        </header>
      </div>




);
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
</div> */}