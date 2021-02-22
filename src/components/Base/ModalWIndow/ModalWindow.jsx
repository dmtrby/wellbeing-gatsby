import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { motion, AnimatePresence } from 'framer-motion';

import IconComponent from 'components/Base/IconComponent';
import Button from 'components/Base/Button';

import s from './ModalWindow.module.scss';

const ModalWindow = ({ children, isOpen, hideModal }) => {
  const MotionDialogOverlay = motion.custom(DialogOverlay);
  const MotionDialogContent = motion.custom(DialogContent);
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDialogOverlay
          isOpen={isOpen}
          className={s.modal__overlay}
          onDismiss={hideModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MotionDialogContent
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={s.modal}
            aria-label="modal window"
          >
            <div className="row end-xs">
              <Button variant="text" className={s.modal__close} onClick={hideModal}>
                <IconComponent xlinkHref="cancel" />
              </Button>
            </div>
            <div className={s.modal__content}>{children}</div>
          </MotionDialogContent>
        </MotionDialogOverlay>
      )}
    </AnimatePresence>
  );
};

export default ModalWindow;
