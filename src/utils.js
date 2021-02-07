export const findKeysInSurveyBlocks = (surveyBlocks) => {
  const values = {};
  surveyBlocks.forEach(surveyBlock => {
    surveyBlock.questions.forEach(question => {
      values[question.name] = '';
    });
  });

  return values;
}
