import React, { memo } from 'react';
import clsx from 'clsx';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ViewportProvider from 'src/contextProviders/ViewportProvider';
import LoadingOverlayProvider from 'src/contextProviders/LoadingOverlayProvider';

import s from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <ViewportProvider>
      <LoadingOverlayProvider>
        <div className="main-wrapper">
          <Header />
          <main className="container align-stretch display-flex">
            <div className={clsx('row', 'flex-justify-center')}>
              <div className={`${s.wrapper} col-lg-10 padding-top-bottom-0 col-xs-12`}>
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </LoadingOverlayProvider>
    </ViewportProvider>
  );
};

export default memo(Layout);
