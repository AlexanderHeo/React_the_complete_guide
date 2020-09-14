import React from 'react';

const UserInput = props => {
  const labelStyle = {
    fontSize: '1.2rem',
  }
  const inputStyle = {
    width: '250px',
    backgroundColor: 'gainsboro',
    borderRadius: '0.25rem',
    fontSize: '1.1rem',
    cursor: 'pointer',
    padding: '0.5rem'
  }
  return (
    <form>
      <label style={labelStyle}>Change the second username:</label><br/>
      <input
        style = {inputStyle}
        type="text"
        onChange={props.change}
        placeholder={props.name}/>
    </form>
  )
}

export default UserInput;
