import React from 'react';

const Validation = props => {
  const notLongEnough = {
    border: "3px solid red",
    padding: "1rem"
  }
  const isLongEnough = {
    border: "3px solid green",
    padding: "1rem"
  }
  const length = props.length;
  const minimumLength = 5;
  let output;
  if (length < minimumLength || !length) {
    output = <p style={notLongEnough}>Input is not long enough</p>
  } else if (length >= minimumLength) {
    output = <p style={isLongEnough}>Input is long enough</p>
  }
  return output;
}

export default Validation;
