import React, { useContext, useEffect } from 'react';
import useAxios from 'axios-hooks';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

import SuccessModalComponent from 'components/SuccessModalComponent';
import ErrorComponent from 'components/ErrorComponent';
import ModalWindow from 'components/Base/ModalWindow';
import QuestionsForm from 'components/QuestionsForm';
import { useModal } from 'src/hooks';
import { LoadingOverlayContext } from 'src/contextProviders/LoadingOverlayProvider/LoadingOverlayProvider';
import { COOKIE_NAMES } from 'src/constants';

const SurveyQuestions = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(COOKIE_NAMES.EMAIL);
  const emailCookie = cookies[COOKIE_NAMES.EMAIL];
  const {
    query: { surveyId },
    push,
  } = router;
  const { setLoading } = useContext(LoadingOverlayContext);

  const [{ data, loading: sendLoading, error }, sendData] = useAxios(
    {
      url: 'http://127.0.01:8102/addSurvey',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    },
    { manual: true },
  );

  const [{ data: getData, loading: getLoading, error: getError }] = useAxios({
    url: `http://127.0.01:8102/survey?surveyId=${surveyId}${emailCookie ? 'userId=' + emailCookie : ''}`,
    method: 'GET',
  });

  const [sms, smo, smc] = useModal(!!data);
  const [ems, emo, emc] = useModal(!!error);

  const handleSubmit = (sendDataObject) => {
    ems && emc();
    const promise = sendData({ data: sendDataObject });
    promise
      .then(() => {
        setCookie(COOKIE_NAMES.EMAIL, sendDataObject.userId);
        smo();
      })
      .catch(() => {
        emo();
      });
  };

  useEffect(() => {
    if (getLoading) {
      setLoading(true);
    } else if (sendLoading) {
        setLoading(true);
    } else {
      setLoading(false);
    }
    
  }, [getLoading, sendLoading]);

  if (getLoading) {
    return <></>;
  }

  if (getData && getData.successful) {
    const { data: { title, surveyBlocks } } = getData;
    return (
      <div>
        <div className="margin-top-3">
          <h1>{title}</h1>
        </div>
        <div className="margin-top-4">
          <QuestionsForm surveyBlocks={surveyBlocks} onSubmit={handleSubmit} surveyId={surveyId} />
        </div>
        <ModalWindow isOpen={sms} hideModal={smc}>
          <SuccessModalComponent surveyId={surveyId} />
        </ModalWindow>
        <ModalWindow isOpen={ems} hideModal={emc}>
          <ErrorComponent
            ctaClick={handleSubmit}
            ctaTitle="Re-submit"
            title="Oops"
            description="There was an error on server side."
            todo="Please try to re-submit the survey."
          />
        </ModalWindow>
      </div>
    );
  }

  if ((getData && !getData.successful) || getError) {
    return (
      <ErrorComponent
        title="Oops"
        description={getData.message}
        todo="Please try to reload the page."
      />
    );
  }

  return <div></div>;
};

export default SurveyQuestions;
