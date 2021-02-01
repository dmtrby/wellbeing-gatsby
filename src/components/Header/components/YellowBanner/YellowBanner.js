import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import yellowBannerStyles from './yellow-banner.module.scss';

const YellowBanner = () => {
  return (
    <a href="#">
<div className={yellowBannerStyles.banner}>
    <Row center="xs">
    <Col xs={12} md={6}>
      
        <div className="banner__title">
          <strong>Maximise your local area wellbeing</strong>
        </div>
        </Col>
        <Col xs={12} md={6}>
        <div className="banner__label">
          tailored support for local authorities
        </div>
        </Col>
      
      </Row>
      </div>
    </a>
    
  )
};

export default YellowBanner;