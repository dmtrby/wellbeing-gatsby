import React, { useState } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import s from './RadioGroup.module.scss';

const RadioButton = ({ name, children, checked, value, onChange }) => {
  console.log(checked);
  return (
    <label htmlFor={`${name}-${value}-id`} className={clsx(s.radiogroup__label, checked && s.radiogroup__label_active)}>
      <input type="radio" id={`${name}-${value}-id`} name={name} checked={checked} value={value} onChange={onChange} />
      {children}
    </label>
  )
}

const RadioGroup = ({ points }) => {
  console.log('tut', points);
  const [active, setActive] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value !== active) {
      setActive(+value);
    }
  }

  const uniqueName = uuidv4();

  return (
    <div className={s.radiogroup}>
      {points && points.map((point, index) => {
        console.log('tut');
        const { value } = point;
        console.log(value);
        return (
          <RadioButton name={uniqueName} checked={value === active} value={value} onChange={handleChange} key={index}>{value}</RadioButton>
        )
      })}
    </div>
  )
}

export default RadioGroup;
