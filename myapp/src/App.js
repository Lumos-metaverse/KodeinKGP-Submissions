
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data , setData] = useState({
    content:'Data will appear here',
    author:'Author Name will appear here',
    tags: ["Nice"]
  });

  function getQuote () {
    try {
      fetch('https://api.quotable.io/random').then (
        response => response.json().then(
          (quote) => {
            setData(quote);
          }
        )
      )
    }
    catch(e) {
      console.log(e);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Random Quote Generator</h1>
        <h3 className="Quote">Quote: {data.content}</h3>
        <h3 className="Author">Author: {data.author}</h3>
        <h3 className="Tag">Tag: {data.tags}</h3>
        <button className="GetQuote" onClick = {getQuote}>Get Quote</button>
      </header>
    </div>
  );
}

export default App;
