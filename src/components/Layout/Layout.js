import React from 'react';

import Header from 'components/Header';

import s from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row flex-justify-center">
          <div className={`${s.wrapper} col-xl-10 col-xl-offset-1 col-no-gutter`}>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
