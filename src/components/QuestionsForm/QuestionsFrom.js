import React, { useMemo } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Base/Button';
import Question from './components/Question';
import HR from 'components/Base/HR';
import { findKeysInSurveyBlocks } from 'src/utils';
import MySelect from './components/MySelect';
import EmailInput from 'components/Base/EmailInput';

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

const QuestionsForm = ({ surveyBlocks, onSubmit }) => {
  const questionValues = useMemo(() => findKeysInSurveyBlocks(surveyBlocks), [surveyBlocks]);
  const initialValues = useMemo(() => ({ ...questionValues, email: '', company: '' }), [questionValues]);

  const mapRules = (map) => Object.keys(map).reduce((newMap, key) => ({ ...newMap, [key]: Yup.mixed().required() }), {});

  const schema = Yup.lazy(map => Yup.object(
    mapRules(map, Yup.object({}))
  ));

  const selectOptions = [
    { value: 'BT', label: 'BT' },
    { value: 'EE', label: 'EE' },
    { value: 'Epam', label: 'Epam' },
  ];

  return (
    <>
      <h3 className="margin-bottom-3">Questions</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          const valuesToSubmit = { ...values, company: values.company.value };
          console.log(valuesToSubmit);
          onSubmit();
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            {surveyBlocks.map((surveyBlock, surveyBlockIndex) => {
              const { questions, legend } = surveyBlock;
              return (
                <div key={surveyBlockIndex}>
                  <div>
                    {legend ? (
                      <div className="margin-bottom-3">
                        <span className="small">{legend}</span>
                      </div>
                    ) : null}
                    {questions.map((question, questionIndex) => {
                      return <Question question={question} key={questionIndex} />;
                    })}
                  </div>
                  {surveyBlockIndex !== surveyBlocks.length - 1 && <HR />}
                </div>
              );
            })}
            <div>{JSON.stringify(props.errors)}</div>
            <div className="margin-top-2 margin-bottom-2">
              <p className="colour-black margin-bottom-3">Your details</p>
              <div className="row flex-justify-between margin-bottom-9">
                <div className="col-xs-12 col-md-6 col-no-gutter">
                  <EmailInput name="email" validate={validateEmail} />
                </div>
                <div className="col-xs-12 col-md-5 col-no-gutter margin-top-md-0 margin-top-4">
                  <div className="display-flex flex-column">
                    <label htmlFor="select" className="small margin-bottom-1">Company *</label>
                    <Field
                      as={MySelect}
                      options={selectOptions}
                      onChange={(e) => props.setFieldValue('company', e)}
                      onBlur={props.setFieldTouched}
                      value={props.values.company}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default QuestionsForm;
