import React from 'react';
import dynamic from 'next/dynamic';

import Layout from 'components/Layout';
import Link from 'components/Base/Link';
import IconComponent from 'components/Base/IconComponent';

const DynamicSurvey = dynamic(() => import('components/pages/survey/SurveyQuestions'), {
  ssr: false,
});

const SurveyPage = () => {
  return (
    <Layout>
      <div className="margin-top-3 small">
        <Link href="#" className="display-flex flex-align-center text-bold">
          <IconComponent xlinkHref="left-arrow" colour="teal" />
          <span className="margin-left-2">What Works Wellbeing</span>
        </Link>
      </div>
      <DynamicSurvey />
    </Layout>
  );
};

export default SurveyPage;
