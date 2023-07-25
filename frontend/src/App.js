import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState([]);
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const [quoteString, setQuoteString] = useState('');
  const [submit, setSubmit] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5050/quote')
      .then(res => {
        setQuote(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [submit]);

  const handleSubmit = async () => {
    
    if (!quoteAuthor.trim() || !quoteString.trim()) {
      setErrorMessage('ERROR : Please! enter both your name and your quote before submitting.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5050/quote', {
        author: quoteAuthor,
        quote: quoteString,
      });
      setSubmit(res);
      setQuoteAuthor('');
      setQuoteString('');
      setErrorMessage('');
    } catch (error) {
      if (error.response) {

        setErrorMessage(`Server responded with ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        
        setErrorMessage('No response received from the server. Please try again later.');
      } else {
        
        setErrorMessage('Oops! Something went wrong with the request.');
      }
    }
  };

  return (
    <div className="App">
      <header className = "App-header">
      <h1 className = "Title">*<u> Today's Quotes are :</u>=></h1>
      <h2>{quote.map((item) => (<div className = "Quote">-><strong><i> {item.quote}</i></strong> ~ {item.author}</div>))}</h2>
      <div>
        <h1 className = "input">Feel Free to Add your own Quote!!!</h1>
        <div>
          <label className = "namelabel">Your Name : </label>
          <input onChange={(e) => { setQuoteAuthor(e.target.value) }} value={quoteAuthor} />
        </div>
        <div>
          <label className = "quotelabel">Your Quote : </label>
          <input onChange={(e) => { setQuoteString(e.target.value) }} value={quoteString} />
        </div>
        <button className = "submit" onClick={handleSubmit}>Submit</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
      </header>
    </div>
  );
}

export default App;
