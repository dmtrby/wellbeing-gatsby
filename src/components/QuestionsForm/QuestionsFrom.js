import React, { useMemo } from 'react';
import { Formik, Field } from 'formik';

import Button from 'components/Base/Button';
import Question from './components/Question';
import HR from 'components/Base/HR';
import { findKeysInSurveyBlocks } from 'src/utils';
import MySelect from './components/MySelect';
import EmailInput from 'components/Base/EmailInput';

const QuestionsForm = ({ surveyBlocks, onSubmit }) => {
  const initialValues = useMemo(() => findKeysInSurveyBlocks(surveyBlocks), [surveyBlocks]);

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
        onSubmit={(values) => {
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
            <div className="margin-top-2 margin-bottom-2">
              <p className="colour-black margin-bottom-3">Your details</p>
              <div className="row flex-justify-between margin-bottom-9">
                <div className="col-xs-12 col-md-6 col-no-gutter">
                  <EmailInput name="email" />
                </div>
                <div className="col-xs-12 col-md-5 col-no-gutter margin-top-md-0 margin-top-4">
                  <div className="display-flex flex-column">
                    <label htmlFor="select" className="small margin-bottom-1">Company</label>
                    <MySelect options={selectOptions} defaultInputValue={selectOptions[0].value} />
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
