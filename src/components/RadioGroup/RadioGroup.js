import React, { memo } from 'react';
import clsx from 'clsx';
import { useFormikContext, Field } from 'formik';

import QuestionLegend from 'components/QuestionLegend';

import s from './RadioGroup.module.scss';

const RadioButton = ({ name, children, checked, value }) => {
  return (
    <label htmlFor={`${name}-${value}-id`} className={clsx(s.radiogroup_button__label, checked && s.radiogroup_button__label_active)}>
      <Field type="radio" id={`${name}-${value}-id`} name={name} checked={checked} value={value}/>
      {children}
    </label>
  )
}

const RadioGroup = ({ points, radioLegends, name }) => {
  const { values } = useFormikContext();

  return (
    <div className={clsx(s.radiogroup, 'row')}>
      {points && points.map((point, index) => {
        const { value, legend } = point;

        return (
          <div className={clsx(s.radiogroup_button, 'col', 'col-no-gutter')} key={index}>
            {radioLegends ?
              <div className={clsx('row', 'flex-column')}>
                <RadioButton name={name} checked={value.toString() === values[name]} value={value}>{value}</RadioButton>
                {legend && <QuestionLegend className="margin-top-2">{legend}</QuestionLegend>}
              </div>
              :
              <div className={clsx('row', 'flex-column')}>
                <RadioButton name={name} checked={value.toString() === values[name]} value={value}>{value}</RadioButton>
              </div>}
          </div>
        )
      })}
    </div >
  )
}

export default memo(RadioGroup);
