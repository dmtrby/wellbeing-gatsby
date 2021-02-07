import React from 'react';
import clsx from 'clsx';

import s from './HR.module.scss';

const HR = () => {
  return <div className={clsx(s.hr, 'margin-top-5', 'margin-bottom-5')}></div>
};

export default HR;
