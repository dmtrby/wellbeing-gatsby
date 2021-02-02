import React from 'react';

import logo from 'src/images/logo.svg';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__logo}>
          <img src={logo} alt="WellBeing logotype" />
        </div>
          <span className={s.header__title}>Surveys</span>
      </div>
    </header>
  );
};

export default Header;
