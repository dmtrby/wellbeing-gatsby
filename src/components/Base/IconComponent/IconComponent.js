import React from 'react';
import { withPrefix } from 'gatsby';
import cslx from 'clsx';

import s from './IconComponent.module.scss';
import clsx from 'clsx';

const Icon = ({ xlinkHref, colour, size }) => {
  // console.log(sprite.id.cancel);
  return (
    <svg className={clsx(s.icon, colour && s[`icon__${colour}`], size && s[`icon__${size}`])}>
      <use xlinkHref={withPrefix(`svg-sprite.svg#${xlinkHref}`)} />
    </svg>
  );
};

export default Icon;
