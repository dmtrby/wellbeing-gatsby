import React from 'react';

import s from './Button.module.scss';

const Button = ({ type, children, onClick }) => {
  return <button className={s.btn} type={type || 'button'} onClick={onClick}>{children}</button>
}

export default Button;
