import React from 'react';

import s from './yellow-banner.module.scss';

const YellowBanner = () => {
  return (
    <a href="#">
      <div className={s.banner}>
        <div className="banner__title">
          <strong>Maximise your local area wellbeing</strong>
        </div>
        <div className="banner__label">
          tailored support for local authorities
        </div>
      </div>
    </a>
  )
};

export default YellowBanner;
