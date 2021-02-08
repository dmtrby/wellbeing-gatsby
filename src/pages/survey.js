import React, { useMemo } from "react";
import useAxios from 'axios-hooks';
import LoadingOverlay from 'react-loading-overlay';

import Layout from 'components/Layout';
import QuestionsForm from 'components/QuestionsForm';
import { surveyData } from 'src/mockedData';
import Link from 'components/Base/Link';
import IconComponent from 'components/Base/IconComponent';
import ViewportProvider from 'components/ViewportProvider';
import SuccessModalComponent from 'components/SuccessModalComponent';
import ErrorModalComponent from 'components/ErrorModalComponent';
import ModalWindow from 'components/Base/ModalWindow';
import { useModal } from 'src/hooks';


const { title, surveyBlocks } = surveyData;

const SurveyPage = () => {
  const [sms, smo, smc] = useModal(!!data);
  const [ems, emo, emc] = useModal(!!error);

  const [{ data, loading, error }, sendData] = useAxios(
    {
      url: 'https://reqres.in/api/register?delay=2',
      method: 'POST'
    },
    { manual: true }
  );

  const handleSubmit = () => {
    ems && emc();
    const promise = sendData();
    promise.then(() => smo()).catch(() => emo());
  }

  return (
    <ViewportProvider>
      <LoadingOverlay
        active={loading}
        spinner
      >
        <Layout>
          <div className="margin-top-3 small">
            <Link href="#" className="display-flex flex-align-center text-bold">
              <IconComponent xlinkHref="left-arrow" colour="teal" />
              <span className="margin-left-2">Back</span>
            </Link>
          </div>
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
        </Layout>
      </LoadingOverlay>
    </ViewportProvider>
  )
}

export default SurveyPage
