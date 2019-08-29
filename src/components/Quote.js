import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, author, color }) => {
  return (
    <div>
      <i className='fas fa-quote-left fa-2x fa-fw' style={{ color: color }}></i>
      <p className='primary' style={{ color: color }}>
        {quote}
      </p>
      <p style={{ textAlign: 'right', color: color }}>-{author}</p>
    </div>
  );
};

Quote.propType = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Quote;
