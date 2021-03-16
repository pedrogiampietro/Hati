import React from 'react';
import MaskedInput from 'react-text-mask';

export default ({ mask, type, placeholder, className, onChange }) => (
  <div>
    <MaskedInput
      mask={mask}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  </div>
);
