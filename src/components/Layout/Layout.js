import React, { useState } from 'react';

import Header from 'components/Header';
import Button from 'components/Base/Button';
import ModalWindow from 'components/Base/ModalWIndow';

import s from './Layout.module.scss';

const Layout = ({ children }) => {
  const [show, setModal] = useState(false);

  return (
    <>
      <Header />
      <main className="container">
        <div className="row flex-justify-center">
          <div className={`${s.wrapper} col-xl-10 col-xl-offset-1`}>
            {children}
            <Button type="button" onClick={() => setModal(!show)}>Start survey</Button>
            <ModalWindow isOpen={show} handleHide={() => setModal(!show)}>modal content</ModalWindow>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
