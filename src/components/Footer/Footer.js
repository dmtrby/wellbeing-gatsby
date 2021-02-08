import React, { memo } from 'react';
import clsx from 'clsx';

import MyImage from 'components/Base/MyImage';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className="container padding-top-4 padding-bottom-6">
      <div className="row flex-justify-center">
        <div className={clsx(s.wrapper, 'col-lg-10', 'padding-top-bottom-0', 'col-xs-12')}>
          <div className="display-flex">
              <div className="display-flex align-items-center margin-right-3">
                <span className="xsmall margin-right-1">In partnership with</span>
                <MyImage src="/images/bt-logo.png" alt="BT logotype" width={24} height={24} />
              </div>
              <div className="display-flex align-items-center">
                <span className="xsmall margin-right-1">Powered by</span>
                <MyImage src="/images/epam-logo.png" alt="EPAM logotype" width={48} height={16.9} />
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
