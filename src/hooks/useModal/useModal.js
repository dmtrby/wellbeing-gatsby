import { useState, useCallback } from 'react';

import ModalWindow from 'components/base/ModalWindow';

const useModal = () => {
  const [show, setModal] = useState(false);

  const openModal = useCallback(() => setModal(true), []);

  const closeModal = useCallback(() => setModal(false), []);

  return [ModalWindow, show, openModal, closeModal];
}

export default useModal;