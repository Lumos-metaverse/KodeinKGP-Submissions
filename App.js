import React, {useEffect, useState} from 'react';
import './App.css';
// import axios from 'axios';

// function App() {
//   const [quote, setQoutw]=useState()

//   useEffect(()=>{
//     axios.get('http://localhost:5050/quote')
//     .then((res)=>{
//       setQoutw(res.data)
//     })
//       .catch((err)=>{
//         console.log(err)
//       })
//   },[])



//   return (
//     <div>
//       today's Quote are :-{quote && quote.map((item)=>(item.quote))}
//     </div>
//   );
// }

// export default App;

function App(){
  const [data, setData]= useState(0);
   
  async function getQuote(){
    try{
      await fetch('https://api.quotable.io/random').then(
      Response=>Response.json()).then(
        (quote)=>{
          setData(quote);
        }
      )
  }
  catch(e){
    console.log(e);
  }
}
return(
  <div className="App">
    <header className="App-header">
      <h3 className='Title'>Random Quote Generator</h3>
      <h3 className='Quote'>{data.content}</h3>
      <h3 className='Author'>{data.author}</h3>
      <button className='Generator' onClick={getQuote}>Get Quote</button>
    </header>
  </div>
);
}

export default App;