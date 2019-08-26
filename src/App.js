import React, { useState } from 'react';
import Board from './components/Board';
import axios from 'axios';
import './App.css';
const App = () => {
  // State
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const loadQuotes = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );
    randomQuote(response.data.quotes);
    setLoading(false);
  };

  const randomQuote = arrayQuotes => {
    let index = Math.floor(Math.random() * 103);
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
        loading={loading}
      />
    </div>
  );
};

export default App;
