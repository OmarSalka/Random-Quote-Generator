import React, { useState } from 'react';
import Board from './components/Board';
import axios from 'axios';
import './App.css';
const App = () => {
  // State
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState([]);

  const clickHandler = event => {
    event.preventDefault();
    randomQuote(quotes);
  };

  const loadQuotes = async () => {
    const response = await axios.get(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );
    randomQuote(response.data.quotes);
  };

  const randomQuote = arrayQuotes => {
    setQuotes(arrayQuotes);

    let index = Math.floor(Math.random() * 101);
    let quote = arrayQuotes[index].quote;
    let author = arrayQuotes[index].author;

    setQuote(quote);
    setAuthor(author);
  };

  return (
    <div className='container'>
      <Board
        loadQuotes={loadQuotes}
        quote={quote}
        author={author}
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default App;
