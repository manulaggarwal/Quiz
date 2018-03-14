import React from 'react';

const Label = ({type, value, forOption}) => (
    <label 
      type={type} 
      value={value} 
      htmlFor={forOption}
    >
        {value}
    </label>
  );
export default Label;