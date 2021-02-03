import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { useTransition, animated} from 'react-spring';

import IconComponent from 'components/Base/IconComponent';
import Button from 'components/Base/Button';

import s from './ModalWindow.module.scss';

const ModalWindow = ({ children, isOpen, handleHide }) => {
  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);
  // const [props, set] = useSpring(() => ({ opacity: 1 }));
  // set({ opacity: isOpen ? 1 : 0 });
  console.log('render');
  const transitions = useTransition(isOpen, null, {
    from: { opacity: '0', y: 0 },
    enter: { opacity: '1', y: 500 },
    leave: { opacity: '0', y: 0 },
  });

  return transitions.map(
    ({ item, key, props: styles }) =>
      item && (
        <AnimatedDialogOverlay className={s.modal__overlay} onDismiss={handleHide} style={styles} key={key}>
          <AnimatedDialogContent
            className={s.modal}
            aria-label="modal window"
            style={{
              transform: styles.y.interpolate((value) => `translate(0px, ${value}px)`),
              border: '4px solid hsla(0, 0%, 0%, 0.5)',
              borderRadius: 10,
            }}
          >
            <div className="row end-xs">
              <Button variant="text" className={s.modal__close} onClick={handleHide}>
                <IconComponent xlinkHref="cancel" />
              </Button>
            </div>
            <div className={s.modal__content}>{children}</div>
          </AnimatedDialogContent>
        </AnimatedDialogOverlay>
      ),
  );
};

export default ModalWindow;
