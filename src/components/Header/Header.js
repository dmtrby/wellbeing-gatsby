import React from 'react';

import logo from 'src/images/logo.svg';
import YellowBanner from './components/YellowBanner';

const Header = () => {
  return (
    <header>
      <YellowBanner />
      <img src={logo} />
    </header>
  )
};

export default Header;
