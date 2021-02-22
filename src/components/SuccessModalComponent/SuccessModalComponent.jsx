import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import IconComponent from 'components/Base/IconComponent';

import buttonStyles from 'components/Base/Button/Button.module.scss';

const SuccessModalComponent = ({ surveyId }) => (
    <div className="text-center">
      <div className="margin-bottom-5">
        <IconComponent xlinkHref="comment" colour="teal" size="big" />
      </div>
      <h2>Thank you</h2>
      <h3 className="margin-bottom-5">Your survey has been submitted.</h3>
      <div className="margin-bottom-9">
        <span className="small">You can fill in this survey once a week and track your response over time.</span>
      </div>

      <Link href={`/report?surveyId=${surveyId}`}>
        <a className={clsx(buttonStyles.btn, buttonStyles.btn__primary)}>See results</a>
      </Link>
    </div>
  );

export default SuccessModalComponent;
