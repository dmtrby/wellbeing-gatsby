import React from 'react';
import { Field } from 'formik';

import s from './EmailInput.module.scss';

const EmailInput = ({ name, validate }) => {
  return (
    <div className="display-flex flex-column">
      <label htmlFor={name} className="small margin-bottom-1">
        Email *
      </label>
      <Field type="email" validate={validate} name={name} id={name} className={s.input} />
    </div>
  );
};

export default EmailInput;
