import React from 'react';

const Input = ({type, value, name, id, onClick}) => (
    <input 
      type={type} 
      value={value} 
      name={name}
      id={id}
      onClick={onClick}
    />
  );

export default Input;