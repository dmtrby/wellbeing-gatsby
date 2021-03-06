import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Layout from 'components/Layout';
import Link from 'components/Base/Link';
import IconComponent from 'components/Base/IconComponent';

const DynamicReport = dynamic(() => import('components/pages/reports/Report'), {
  ssr: false,
});

const ReportsPage = () => (
    <>
      <Head>
        <title>Report page | Wellbeing surveys</title>
        <meta name="description" content="View your survey report" />
      </Head>
      <Layout>
        <div className="row flex-column height-100-perc">
          <div className="small">
            <Link
              href="https://whatworkswellbeing.org/category/employee-snapshot-survey/"
              className="display-flex flex-align-center text-bold"
            >
              <IconComponent xlinkHref="left-arrow" colour="teal" />
              <span className="margin-left-2">What Works Wellbeing</span>
            </Link>
          </div>
          <div className="col display-flex align-items-center flex-justify-center">
            <DynamicReport />
          </div>
        </div>
      </Layout>
    </>
  );

ReportsPage.getInitialProps = ({ res, query: { surveyId } }) => {
  if (!surveyId) {
    res.writeHead(301, {
      Location: '/404',
    });
    res.end();
  }

  return {};
};

export default ReportsPage;
