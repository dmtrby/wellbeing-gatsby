import React from "react";

import Layout from 'components/Layout';
import Button from 'components/Base/Button';
import ModalWindow from 'components/Base/ModalWindow';
import { useModal } from 'src/hooks';
import SuccessModalComponent from 'components/SuccessModalComponent';


const IndexPage = () => {
  const [modalStatus, openModal, closeModal] = useModal(false);
  return (
    <Layout>
      <Button type="button" variant="primary" onClick={openModal}>
        Start survey
            </Button>
      <ModalWindow isOpen={modalStatus} hideModal={closeModal}>
        <SuccessModalComponent ctaClick={() =>{}} />
      </ModalWindow>
    </Layout>
  )
}

export default IndexPage
