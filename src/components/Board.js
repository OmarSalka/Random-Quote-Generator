import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const Board = ({ icon1, icon2, loadQuotes, clickHandler, quote, author }) => {
  useEffect(() => {
    loadQuotes();
    // eslint-disable-next-line
  }, []);

  const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes,${author}&text=${quote}`;
  const tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

  // Styling================
  const index = Math.floor(Math.random() * 29);
  const color = colors[index];

  const buttonStyling = {
    padding: '0.5rem 0.75rem',
    background: color,
    color: '#fff',
    borderRadius: '10%',
    cursor: 'pointer'
  };

  return (
    <div className='quote-box'>
      {
        ((document.body.style.backgroundColor = color),
        (document.body.style.color = '#f0f8ff'))
      }
      <Quote quote={quote} author={author} color={color} />
      <div className='buttons'>
        <div>
          <a
            href={twitterLink}
            target='_blank'
            rel='noopener noreferrer'
            style={buttonStyling}
          >
            <i className={icon1}></i>
          </a>{' '}
          <a
            href={tumblrLink}
            target='_blank'
            rel='noopener noreferrer'
            style={buttonStyling}
          >
            <i className={icon2}></i>
          </a>
        </div>
        <div>
          {/* eslint-disable-next-line */}
          <a href='' style={buttonStyling} onClick={clickHandler}>
            New Quote
          </a>
        </div>
      </div>
    </div>
  );
};

Board.defaultProps = {
  icon1: 'fab fa-twitter',
  icon2: 'fab fa-tumblr'
};

Board.propType = {
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  loadQuotes: PropTypes.func.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  randomQuote: PropTypes.func.isRequired
};

const colors = [
  '#000000',
  '#0000ff',
  '#a52a2a',
  '#00008b',
  '#008b8b',
  '#a9a9a9',
  '#006400',
  '#bdb76b',
  '#8b008b',
  '#556b2f',
  '#ff8c00',
  '#9932cc',
  '#8b0000',
  '#e9967a',
  '#9400d3',
  '#ff00ff',
  '#008000',
  '#4b0082',
  '#d3d3d3',
  '#ffb6c1',
  '#ff00ff',
  '#800000',
  '#000080',
  '#808000',
  '#ffa500',
  '#ffc0cb',
  '#800080',
  '#800080',
  '#ff0000'
];

export default Board;
