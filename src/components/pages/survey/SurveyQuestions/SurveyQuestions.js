import React, { useContext, useEffect } from 'react';
import useAxios from 'axios-hooks';

import SuccessModalComponent from 'components/SuccessModalComponent';
import ErrorModalComponent from 'components/ErrorModalComponent';
import ModalWindow from 'components/Base/ModalWindow';
import QuestionsForm from 'components/QuestionsForm';
import { surveyData } from 'src/mockedData';
import { useModal } from 'src/hooks';
import { LoadingOverlayContext } from 'src/contextProviders/LoadingOverlayProvider/LoadingOverlayProvider';

const SurveyQuestions = () => {
  const { setLoading } = useContext(LoadingOverlayContext);
  const { title, surveyBlocks } = surveyData;

  const [{ data, loading, error }, sendData] = useAxios(
    {
      url: 'https://reqres.in/api/register?delay=1',
      method: 'POST'
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
  }, [])


  const [sms, smo, smc] = useModal(!!data);
  const [ems, emo, emc] = useModal(!!error);

  const handleSubmit = () => {
    setLoading(true);
    ems && emc();
    const promise = sendData();
    promise.then(() => {
      setLoading(false);
      smo();
    }).catch(() => {
      setLoading(false);
      emo()
    });
  }

  return (
    getData ? <>
      <div className="margin-top-3">
        <h1>{title}</h1>
      </div>
      <div className="margin-top-4">
        <QuestionsForm surveyBlocks={surveyBlocks} onSubmit={handleSubmit} />
      </div>
      <ModalWindow isOpen={sms} hideModal={smc}>
        <SuccessModalComponent ctaClick={() => console.log('success click')} />
      </ModalWindow>
      <ModalWindow isOpen={ems} hideModal={emc}>
        <ErrorModalComponent ctaClick={handleSubmit} />
      </ModalWindow>
    </> : <div></div>
  )
}

export default SurveyQuestions;
