import React from 'react';
import clsx from 'clsx';

import s from './IconComponent.module.scss';

const Icon = ({ xlinkHref, colour, size }) => {
  return (
    <svg className={clsx(s.icon, colour && s[`icon__${colour}`], size && s[`icon__${size}`])}>
      <use xlinkHref={`svg-sprite.svg#${xlinkHref}`} />
    </svg>
  );
};

export default Icon;
