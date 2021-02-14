import React from 'react';
import Head from 'next/head';

import Layout from 'components/Layout';
import Link from 'components/Base/Link';
import IconComponent from 'components/Base/IconComponent';
import ErrorComponent from 'components/ErrorComponent';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Page not found | Wellbeing surveys</title>
        <meta name="description" content="404" />
      </Head>
      <Layout>
        <div className="margin-top-3 small">
          <Link href="#" className="display-flex flex-align-center text-bold">
            <IconComponent xlinkHref="left-arrow" colour="teal" />
            <span className="margin-left-2">What Works Wellbeing</span>
          </Link>
        </div>
        <div className="height-100-perc display-flex align-items-center flex-justify-center">
          <ErrorComponent
            title="404"
            description="This page does not exist"
          />
        </div>
      </Layout>
    </>
  )
};

export default NotFoundPage;
