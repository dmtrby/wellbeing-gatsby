import React from 'react';
import { Field } from 'formik';
import clsx from 'clsx';

import s from './EmailInput.module.scss';

const EmailInput = ({ name, validate, isInvalid, error }) => {
  return (
    <div className={clsx('display-flex', 'flex-column')}>
      <label htmlFor={name} className="small margin-bottom-1">
        Email *
      </label>
      <Field type="text" validate={validate} name={name} id={name} className={clsx(s.input, isInvalid && s.input__invalid)} />
      {isInvalid && <div className="xsmall margin-top-1 colour-red">{error}</div>}
    </div>
  );
};

export default EmailInput;
