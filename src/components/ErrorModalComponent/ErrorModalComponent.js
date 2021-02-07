import React from 'react';

import IconComponent from 'components/Base/IconComponent';
import Button from 'components/Base/Button';

const ErrorModalComponent = ({ ctaClick }) => {
  return (
    <div className="text-center">
      <div className="margin-bottom-5">
        <IconComponent xlinkHref="sad-face" colour="orange" size="big" />
      </div>
      <h2>Oops</h2>
      <h3 className="margin-bottom-5">There was an error on server side.</h3>
      <div className="margin-bottom-9">
        <span className="small">
          Please try to re-submit the survey.
        </span>
      </div>

      <Button type="button" variant="primary" onClick={ctaClick}>
        Re-submit
      </Button>
    </div>
  )
}

export default ErrorModalComponent;
