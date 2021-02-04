import React from 'react';

import Header from 'components/Header';
import Button from 'components/Base/Button';
import IconComponent from 'components/Base/IconComponent';
import ModalWindow from 'components/Base/ModalWindow';
import { useModal } from 'src/hooks';

import s from './Layout.module.scss';
import QuestionsForm from 'components/QuestionsForm';

const ModalSuccessContent = () => {
  return (
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

      <Button type="button" variant="primary" onClick={() => { }}>
        See results
      </Button>
    </div>
  )
};

const Layout = ({ children }) => {
  const [modalStatus, openModal, closeModal] = useModal(false);

  const questions = [
    {
      question: "Overall, how satisfied are you with your life nowadays?",
      points: [
        {
          value: 0,
        },
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
        {
          value: 8,
        },
        {
          value: 9,
        },
      ]
    }
  ]

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
            <ModalWindow isOpen={modalStatus} hideModal={closeModal}>
              <ModalSuccessContent />
            </ModalWindow>
            <div className="margin-top-5">
              <QuestionsForm questions={questions} />
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
