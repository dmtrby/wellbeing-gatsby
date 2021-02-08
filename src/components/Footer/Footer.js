import React, { memo } from 'react';
import clsx from 'clsx';

import MyImage from 'components/Base/MyImage';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <span>In partnership with</span>
            <MyImage src="/images/bt-logo.png" alt="BT logotype" width={24} height={24} />
          </div>
          <div className="col">
            <span>Powered by</span>
            <MyImage src="/images/epam-logo.png" alt="EPAM logotype" width={48} height={16.9} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
