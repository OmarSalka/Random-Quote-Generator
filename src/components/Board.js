import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Board = ({ icon1, icon2, loadquote, quote, author }) => {
  useEffect(() => {
    loadquote();
    // eslint-disable-next-line
  }, []);

  const clickHandler = event => {
    loadquote();
  };

  return (
    <div className='container'>
      <div className='quote-box'>
        <i className='fas fa-quote-left fa-2x fa-fw'></i>{' '}
        <p className='primary'>{quote}</p>
        <p style={{ textAlign: 'right' }}>-{author}</p>
        <div className='buttons'>
          <div>
            <a href='#' style={buttonStyling}>
              <i className={icon1}></i>
            </a>{' '}
            <a href='#' style={buttonStyling}>
              <i className={icon2}></i>
            </a>
          </div>
          <div>
            <a href='#' style={buttonStyling} onClick={clickHandler}>
              New Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const buttonStyling = {
  padding: '0.5rem 0.75rem',
  background: '#333',
  color: '#fff',
  borderRadius: '10%'
};

Board.defaultProps = {
  icon1: 'fab fa-twitter',
  icon2: 'fab fa-tumblr'
};

Board.propType = {
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  loadQuote: PropTypes.func.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Board;
