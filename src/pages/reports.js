import React from 'react';
import dynamic from 'next/dynamic';

import Layout from 'components/Layout';
import Link from 'components/Base/Link';
import IconComponent from 'components/Base/IconComponent';

const DynamicReport = dynamic(() => import('components/pages/reports/Report'), {
  ssr: false,
});

const ReportsPage = () => {
  return (
    <Layout>
      <div className="margin-top-3 small">
        <Link href="#" className="display-flex flex-align-center text-bold">
          <IconComponent xlinkHref="left-arrow" colour="teal" />
          <span className="margin-left-2">What Works Wellbeing</span>
        </Link>
      </div>
      <DynamicReport />
    </Layout>
  );
};

export default ReportsPage;
