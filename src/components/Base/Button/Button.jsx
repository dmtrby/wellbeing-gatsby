import React from 'react';

import s from './Button.module.scss';

const Button = ({ type = 'button', children, onClick, variant }) => {
  let classes = `${s.btn} `;
  switch (variant) {
    case 'primary':
      classes += `${s.btn__primary} `;
      break;
    case 'text':
      classes += `${s.btn__text} `;
      break;
    default:
      classes += '';
  }
  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
