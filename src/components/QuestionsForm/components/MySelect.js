import React from 'react';
import Select from 'react-select';

const MySelect = ({ options, defaultInputValue}) => {
  return (
    <Select options={options} defaultInputValue={defaultInputValue} className="select" classNamePrefix="select" />
  )
}

export default MySelect;