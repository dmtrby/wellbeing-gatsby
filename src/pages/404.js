import React from 'react';

import Layout from 'components/Layout';
import Link from 'components/Base/Link';
import IconComponent from 'components/Base/IconComponent';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="margin-top-3 small height-100-perc">
        <Link href="#" className="display-flex flex-align-center text-bold">
          <IconComponent xlinkHref="left-arrow" colour="teal" />
          <span className="margin-left-2">What Works Wellbeing</span>
        </Link>
        <div className="display-flex flex-justify-center align-items-center">
          404
        </div>
      </div>
    </Layout>
  )
};

export default NotFoundPage;
