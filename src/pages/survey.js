import React, { useMemo } from "react";
import dynamic from 'next/dynamic';

import Layout from 'components/Layout';
import Link from 'components/Base/Link';
import IconComponent from 'components/Base/IconComponent';
import ViewportProvider from 'components/ViewportProvider';
import LoadingOverlayProvider from 'src/contextProviders/LoadingOverlayProvider/LoadingOverlayProvider';
import MyClipLoader from 'src/components/MyClipLoader';


const DynamicSurvey = dynamic(
  () => import('components/pages/survey/SurveyQuestions'),
  {
    ssr: false,
    // loading: () => <MyClipLoader withWrapper />,
  }
)

const SurveyPage = () => {
  return (
    <ViewportProvider>
      <LoadingOverlayProvider>
        <Layout>
          <div className="margin-top-3 small">
            <Link href="#" className="display-flex flex-align-center text-bold">
              <IconComponent xlinkHref="left-arrow" colour="teal" />
              <span className="margin-left-2">Back</span>
            </Link>
          </div>
          <DynamicSurvey />
        </Layout>
      </LoadingOverlayProvider>
    </ViewportProvider>
  )
}

export default SurveyPage
