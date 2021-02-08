import React, { memo } from 'react';
import clsx from 'clsx';

import Image from 'components/Base/Image';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className="row">
          <div
            className={clsx(
              s.header__logo_wrapper,
              'col',
              'display-flex',
              'align-items-center',
              'padding-top-bottom-0',
            )}
          >
            <div className={s.header__logo}>
              <Image src="logo.svg" alt="WellBeing logotype" />
            </div>
            <div>
              <span className={s.header__title}>Surveys</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
