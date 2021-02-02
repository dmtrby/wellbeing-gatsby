import React from 'react';

import logo from 'src/images/logo.svg';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className="row align-items-center">
          <div className={s.header__logo}>
            <img src={logo} alt="WellBeing logotype" />
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
