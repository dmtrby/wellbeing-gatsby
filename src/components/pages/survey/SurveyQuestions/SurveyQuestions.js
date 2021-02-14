import React, { useContext, useEffect } from 'react';
import useAxios from 'axios-hooks';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

import SuccessModalComponent from 'components/SuccessModalComponent';
import ErrorComponent from 'components/ErrorComponent';
import ModalWindow from 'components/Base/ModalWindow';
import QuestionsForm from 'components/QuestionsForm';
import { surveyData } from 'src/mockedData';
import { useModal } from 'src/hooks';
import { LoadingOverlayContext } from 'src/contextProviders/LoadingOverlayProvider/LoadingOverlayProvider';
import { COOKIE_NAMES } from 'src/constants';

const SurveyQuestions = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(COOKIE_NAMES.EMAIL);
  const emailCookie = cookies[COOKIE_NAMES.EMAIL];
  const { query: { surveyId }, push } = router;
  const { setLoading } = useContext(LoadingOverlayContext);
  const { title, surveyBlocks, successfull } = surveyData;

  const [{ data, loading, error }, sendData] = useAxios(
    {
      url: 'https://reqres.in/api/users?page=2',
      method: 'GET'
    },
    { manual: true }
  );

  const [{ data: getData, loading: getLoading, error: getError }, loadData] = useAxios(
    {
      url: 'https://reqres.in/api/register?delay=1',
      method: 'GET'
    },
    { manual: true }
  );

  useEffect(() => {
    setLoading(true);
    ems && emc();
    const promise2 = loadData();
    promise2.then((d) => {
      getData = d;
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [surveyId])


  const [sms, smo, smc] = useModal(!!data);
  const [ems, emo, emc] = useModal(!!error);

  const handleSubmit = (email) => {
    setLoading(true);
    ems && emc();
    const promise = sendData();
    promise.then(() => {
      setLoading(false);
      setCookie(COOKIE_NAMES.EMAIL, email);
      smo();
    }).catch(() => {
      setLoading(false);
      emo()
    });
  }


  if (getData && successfull) {
    return (
      <div>
        <div className="margin-top-3">
          <h1>{title}</h1>
        </div>
        <div className="margin-top-4">
          <QuestionsForm surveyBlocks={surveyBlocks} onSubmit={handleSubmit} />
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
    )
  }


  if (getData && !successfull) {
    return (
      <ErrorComponent
        title="Oops"
        description="There was an error on server side."
        todo="Please try to reload the page."
      />
    )

  }

  return (
    <div></div>
  )
}

export default SurveyQuestions;
