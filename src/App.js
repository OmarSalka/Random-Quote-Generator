import React, { useState } from 'react';
import Board from './components/Board';
import axios from 'axios';
import './App.css';

function App() {
  // State
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const loadquote = async () => {
    try {
      const response = await axios.get(
        'cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?'
      );
      console.log(response);
      setQuote(response.quoteText);
      setAuthor(response.quoteAuthor);
      // const response = await fetch("https://qvoca-bestquotes-v1.p.rapidapi.com/quote", {
      //   "method": "GET",
      //   "headers": {
      //     "x-rapidapi-host": "qvoca-bestquotes-v1.p.rapidapi.com",
      //     "x-rapidapi-key": "39c5e36746mshec39042173d1fa9p1f85edjsn21bc6f3d2400"
      //   }
      // })
      // console.log(response);
      // setQuote(response.message);
      // setAuthor(response.author);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='container'>
      <Board loadquote={loadquote} quote={quote} author={author} />
    </div>
  );
}

export default App;
