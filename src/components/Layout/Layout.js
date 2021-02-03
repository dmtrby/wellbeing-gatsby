import React from 'react';

import Header from 'components/Header';
import Button from 'components/Base/Button';
import IconComponent from 'components/Base/IconComponent';
import { useModal } from 'src/hooks';

import s from './Layout.module.scss';

const Layout = ({ children }) => {
  const [Modal, modalStatus, openModal, closeModal] = useModal();
  return (
    <>
      <Header />
      <main className="container">
        <div className="row flex-justify-center">
          <div className={`${s.wrapper} col-xl-10 col-xl-offset-1`}>
            {children}
            <Button type="button" variant="primary" onClick={openModal}>
              Start survey
            </Button>
            <Modal isOpen={modalStatus} handleHide={closeModal}>
              <div className="text-center">
                <div className="margin-bottom-5">
                  <IconComponent xlinkHref="comment" colour="teal" size="big" />
                </div>
                <h2>Thank you</h2>
                <h3 className="margin-bottom-5">Your survey has been submitted.</h3>
                <div className="margin-bottom-9">
                  <span className="small">
                    You can fill in this survey once a week and track your response over time.
                  </span>
                </div>

                <Button type="button" variant="primary" onClick={() => {}}>
                  See results
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
