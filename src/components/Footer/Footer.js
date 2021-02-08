import React, { memo } from 'react';
import clsx from 'clsx';

import Image from 'components/Base/Image';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <span>In partnership with</span>
            <Image src="bt-logo.png" alt="BT logotype" />
          </div>
          <div className="col">
            <span>Powered by</span>
            <Image src="epam-logo.png" alt="EPAM logotype" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
