/* eslint-disable import/prefer-default-export */
export const findKeysInSurveyBlocks = (surveyBlocks) => {
  const values = {};
  surveyBlocks.forEach((surveyBlock) => {
    surveyBlock.questions.forEach((question) => {
      values[question.questionId] = '';
    });
  });

  return values;
};
