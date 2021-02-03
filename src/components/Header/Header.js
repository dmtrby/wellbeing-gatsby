import React from 'react';

import Image from 'components/Base/Image';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className="row align-items-center">
          <div className={s.header__logo}>
            <Image src="logo.svg" alt="WellBeing logotype" />
          </div>
          <div>
            <span className={s.header__title}>Surveys</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
