import React, { useMemo } from 'react';
import { Formik } from 'formik';

import Button from 'components/Base/Button';
import Question from './components/Question';
import HR from 'components/Base/HR';
import { findKeysInSurveyBlocks } from 'src/utils';

const QuestionsForm = ({ surveyBlocks, onSubmit }) => {
  const initialValues = useMemo(() => findKeysInSurveyBlocks(surveyBlocks), [surveyBlocks]);

  return (
    <>
      <h3 className="margin-bottom-3">Questions</h3>
      <Formik initialValues={initialValues}
        onSubmit={values => {
          onSubmit();
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            {surveyBlocks.map((surveyBlock, surveyBlockIndex) => {
              const { questions, legend } = surveyBlock;
              return (
                <div key={surveyBlockIndex}>
                  <div>
                    {legend ? <div className="margin-bottom-3">
                      <span className="small">{legend}</span>
                    </div> : null}
                    {questions.map((question, questionIndex) => {
                      return <Question question={question} key={questionIndex} />
                    })}
                  </div>
                  {surveyBlockIndex !== surveyBlocks.length - 1 && <HR />}
                </div>
              )
            })
            }
            <Button type="submit" variant="primary">Submit</Button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default QuestionsForm;
