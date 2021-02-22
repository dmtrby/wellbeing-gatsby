import React, { memo } from 'react';
import clsx from 'clsx';

import MyImage from 'components/Base/MyImage';

import s from './Header.module.scss';

const Header = () => (
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
            <MyImage src="/images/logo.svg" alt="WellBeing logotype" width={150} height={50} />
          </div>
          <div>
            <span className={s.header__title}>Surveys</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default memo(Header);
