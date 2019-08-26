import React, { Fragment } from 'react';
import SpinnerGif from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={SpinnerGif} alt='Loading...' style={{width: '200px', margin: 'auto', display: 'block'}}/>
    </Fragment>
  );
};

export default Spinner;
