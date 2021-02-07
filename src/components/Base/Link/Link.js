import React from 'react';
import clsx from 'clsx';

import s from './Link.module.scss';

const Link = ({ href, children, className }) => {
  return <a href={href} className={clsx(s.link, className)}>{children}</a>
}

export default Link;
