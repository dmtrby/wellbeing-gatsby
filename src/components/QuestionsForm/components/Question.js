import React from 'react';

import RadioGroup from 'components/RadioGroup';

const Question = ({ question, points }) => {
  return <>
    <div className="margin-bottom-3 colour-black">{question}</div>
    <div className="margin-bottom-3">
      <RadioGroup points={points}></RadioGroup>
    </div>

  </>


}

export default Question;
