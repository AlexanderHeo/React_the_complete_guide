import React from 'react';

const char = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    border: "1px solid #222",
    borderRadius: "0.25rem",
    backgroundColor: "#ccc",
    cursor: "pointer",
  }
  return (
    <div
      style={style}
      onClick={props.click}>
      {props.char}
    </div>
  )
}

export default char;
