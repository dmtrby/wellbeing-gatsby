import React from 'react';
import { Formik, Form, FieldArray, Field, useFormik } from 'formik';

import Button from 'components/Base/Button';
import Question from './components/Question';

const QuestionsForm = ({ questions }) => {
  const formik = useFormik({
    initialValues: {
      result: null,
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    }
  })
  return (
    <>
      <h3 className="margin-bottom-3">Questions</h3>
      <div className="margin-bottom-3">
        <span className="small">For each of these questions I’d like you to give an answer on a scale of 0 to 10, where 0 is “not at all” and 10 is “completely”...</span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Question question={questions[0].question} points={questions[0].points} />

        <Button type="submit" variant="primary">Submit</Button>
      </form>
    </>
  )
}

export default QuestionsForm;
