import React, { memo, useMemo, useContext } from 'react';

import RadioGroup from 'components/RadioGroup';
import QuestionLegend from 'components/QuestionLegend';
import { viewportContext } from 'src/contextProviders/ViewportProvider/ViewportProvider';
import { BREAKPOINTS } from 'src/constants';

const createPointsArray = (points) => {
  const array = [];
  array.push(points[0].legend);
  array.push(points[Math.floor(points.length / 2)].legend);
  array.push(points[points.length - 1].legend);
  return array;
}

const Question = ({ question }) => {
  const { question: questionTitle, points, pointsLegend, questionId } = question;
  const { width } = useContext(viewportContext);

  const radioLegends = useMemo(() => width > BREAKPOINTS.md && !pointsLegend ? true : false, [width, pointsLegend]);
  let legendArray = [];
  if (!radioLegends) {
    if (pointsLegend) {
      legendArray = pointsLegend;
    } else {
      legendArray = createPointsArray(points)
    }
  }

  return (
    <div className="margin-bottom-5">
      <div className="margin-bottom-3 colour-black">{questionTitle}</div>
      <div>
        <RadioGroup questionId={questionId} points={points} radioLegends={radioLegends}></RadioGroup>
      </div>
      {legendArray && <div className="display-flex flex-justify-between margin-top-2">{legendArray.map((legend, index) => {
        return <QuestionLegend key={index}>{legend}</QuestionLegend>
      })}</div>}
    </div>
  )


}

export default memo(Question);
