import React from 'react';

import IconComponent from 'components/Base/IconComponent';
import Button from 'components/Base/Button';

const SuccessModalComponent = ({ ctaClick }) => {
  return (
    <div className="text-center">
      <div className="margin-bottom-5">
        <IconComponent xlinkHref="comment" colour="teal" size="big" />
      </div>
      <h2>Thank you</h2>
      <h3 className="margin-bottom-5">Your survey has been submitted.</h3>
      <div className="margin-bottom-9">
        <span className="small">
          You can fill in this survey once a week and track your response over time.
        </span>
      </div>

      <Button type="button" variant="primary" onClick={ctaClick}>
        See results
      </Button>
    </div>
  )
}

export default SuccessModalComponent;
