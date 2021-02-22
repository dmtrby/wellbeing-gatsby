import { useState, useCallback } from 'react';

const useModal = (initialState) => {
  const [show, setModal] = useState(initialState);

  const openModal = useCallback(() => setModal(true), []);

  const closeModal = useCallback(() => setModal(false), []);

  return [show, openModal, closeModal];
};

export default useModal;
