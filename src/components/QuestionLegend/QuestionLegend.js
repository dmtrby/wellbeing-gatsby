import React from 'react';
import clsx from 'clsx';

import s from './QuestionLegend.module.scss';

const QuestionLegend = ({ children, className }) => {
  return <div className={clsx(s.legend, className)}><span>{children}</span></div>
};

export default QuestionLegend;

