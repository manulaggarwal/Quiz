import React from 'react';

const Button = ({type, value, name, id}) => (
    <button 
      type={type}
      name={name}
      id={id}
    >
      {value}
    </button>
  );

export default Button;