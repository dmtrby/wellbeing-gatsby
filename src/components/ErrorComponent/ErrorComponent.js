import React from 'react';

import IconComponent from 'components/Base/IconComponent';
import Button from 'components/Base/Button';

const ErrorComponent = ({ ctaClick = null, ctaTitle = null, title, description, todo = null }) => {
  return (
    <div className="text-center">
      <div className="margin-bottom-5">
        <IconComponent xlinkHref="sad-face" colour="orange" size="big" />
      </div>
      <h2>{title}</h2>
      <h3 className="margin-bottom-5">{description}</h3>
      {todo && <div className="margin-bottom-9">
        <span className="small">
          {todo}
        </span>
      </div>}
      {ctaClick && ctaTitle &&
        <Button type="button" variant="primary" onClick={ctaClick}>
          {ctaTitle}
        </Button>
      }
    </div>
  )
}

export default ErrorComponent;
