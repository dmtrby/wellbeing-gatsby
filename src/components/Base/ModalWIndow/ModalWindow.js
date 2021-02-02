import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';

import s from './ModalWindow.module.scss';

const ModalWindow = ({ children, isOpen, handleHide }) => (
  <DialogOverlay className={s.modal__overlay} isOpen={isOpen} onDismiss={handleHide}>
    <DialogContent className={s.modal} aria-label="modal window">
      <div className="row end-xs">
        <span className={s.modal__close}>
           close
        </span>
      </div>
      <div className={s.modal__content}>{children}</div>
    </DialogContent>
  </DialogOverlay>
);

export default ModalWindow;
