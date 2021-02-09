import React from 'react';
import Select from 'react-select';

const MySelect = ({ options, onBlur, onChange, value }) => {
  return (
    <Select
      options={options}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      className="select"
      classNamePrefix="select"
    />
  )
}

export default MySelect;
