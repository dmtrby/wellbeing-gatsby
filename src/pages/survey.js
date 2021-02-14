import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Layout from 'components/Layout';
import Link from 'components/Base/Link';
import IconComponent from 'components/Base/IconComponent';

const DynamicSurvey = dynamic(() => import('components/pages/survey/SurveyQuestions'), {
  ssr: false,
});

const SurveyPage = () => {
  return (
    <>
      <Head>
        <title>Survey page | Wellbeing surveys</title>
        <meta name="description" content="Survey content page" />
      </Head>
      <Layout>
        <div className="margin-top-3 small">
          <Link href="#" className="display-flex flex-align-center text-bold">
            <IconComponent xlinkHref="left-arrow" colour="teal" />
            <span className="margin-left-2">What Works Wellbeing</span>
          </Link>
        </div>
        <div className="height-100-perc display-flex align-items-center flex-justify-center">
          <DynamicSurvey />
        </div>
      </Layout>
    </>
  );
};

SurveyPage.getInitialProps = ({ res, query: { surveyId } }) => {
  if (!surveyId) {
    res.writeHead(301, {
      Location: '/404'
    });
    res.end();
  }

  return {};
}

export default SurveyPage;
