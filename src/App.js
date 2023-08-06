import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react'; 

function App() {
  const [data,setdata] = useState({
    content: 'The Quote comes here',
    author: 'Author of Quote comes here',
    tags: ['Related tag comes here']
  });

  function getQuote(){
    try{
      fetch('https://api.quotable.io/random').then(
        response => response.json()).then(
          (quote)=>{
            setdata(quote);
          }
        )
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Title'>Random Quote Generator</h1>
        <h3 className='Quote'>Quote::{data.content}</h3>
        <h5 className='Author'>Author::{data.author}</h5>
        <h5 className='Author'>Tag::{data.tags[0]}</h5>
        <button id='Generator'onClick={getQuote}>Get Quote</button>
      </header>
    </div>
  );
}

export default App;
