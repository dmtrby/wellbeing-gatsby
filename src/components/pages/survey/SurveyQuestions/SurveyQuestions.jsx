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
  const emailCookieQueryPiece = emailCookie ? `&userId=${  emailCookie}` : '';

  const [{ data, loading: sendLoading, error }, sendData] = useAxios(
    {
      url: `http:${process.env.API_URL}/addSurvey`,
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    },
    { manual: true },
  );

  const [{ data: getData, loading: getLoading, error: getError }] = useAxios({
    url: `http:${process.env.API_URL}/survey?surveyId=${surveyId}${emailCookieQueryPiece}`,
    method: 'GET',
  });

  const [sms, smo] = useModal(!!data);
  const [ems, emo, emc] = useModal(!!error);

  const handleSubmit = (sendDataObject) => {
    if (ems) {
      emc()
    }
    const promise = sendData({ data: sendDataObject });
    promise
      .then((obj) => {
        if (obj.data.successful) {
          setCookie(COOKIE_NAMES.EMAIL, sendDataObject.userId);
          smo();
        } else {
          emo();
        }
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
    const {
      data: { title, surveyBlocks },
    } = getData;
    return (
      <div>
        <div className="margin-top-3">
          <h1>{title}</h1>
        </div>
        <div className="margin-top-4">
          <QuestionsForm surveyBlocks={surveyBlocks} onSubmit={handleSubmit} surveyId={surveyId} />
        </div>
        <ModalWindow isOpen={sms} hideModal={() => push(`/report?surveyId=${surveyId}`)}>
          <SuccessModalComponent surveyId={surveyId} />
        </ModalWindow>
        <ModalWindow isOpen={ems} hideModal={emc}>
          <ErrorComponent
            ctaClick={handleSubmit}
            ctaTitle="Re-submit"
            title="Oops"
            description="There was an error on server side or you have already filled this survey"
            todo="Please try to re-submit the survey."
          />
        </ModalWindow>
      </div>
    );
  }

  if ((getData && !getData.successful) || getError) {
    return <ErrorComponent title="Oops" description={getData.message} todo="Please try to reload the page." />;
  }

  return <div />;
};

export default SurveyQuestions;
