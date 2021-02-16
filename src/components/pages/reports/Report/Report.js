import React, { useEffect, useContext } from 'react';
import useAxios from 'axios-hooks';
import { useCookies } from 'react-cookie';
import clsx from 'clsx';

import { LoadingOverlayContext } from 'src/contextProviders/LoadingOverlayProvider/LoadingOverlayProvider';
import { COOKIE_NAMES } from 'src/constants';
import ErrorComponent from 'components/ErrorComponent';

import s from './Report.module.scss';

const Report = () => {
  const [cookies, setCookie] = useCookies(COOKIE_NAMES.EMAIL);
  const { setLoading } = useContext(LoadingOverlayContext);
  const emailCookie = cookies[COOKIE_NAMES.EMAIL];

  const [{ data: getData, loading: getLoading, error: getError }] = useAxios({
    url: `http://localhost:8102/report?surveyId=default&userId=${emailCookie}`,
    method: 'GET',
  });

  useEffect(() => {
    setLoading(getLoading);
  }, [getLoading]);

  if (getLoading) {
    return <></>;
  }

  if (getData && getData.successful) {
    const {
      data: { surveyDates, title, answers },
      successful,
    } = getData;

    const reportDate = surveyDates[0];

    return (
      <div className="width-100-perc">
        <div className="margin-top-3">
          <h1>{title}</h1>
        </div>
        <div className="margin-top-4">
          <h3>Your wellbeing</h3>
        </div>
        <div className="margin-top-2">
          <span className="small">
            Track your response over time by viewing your weekly reports
          </span>
        </div>
        <div className="margin-top-1">
          <div>
            <div className={clsx(s.report_row, 'row')}>
              <div className="col-xs-8 col-md-10 col-no-gutter"></div>
              <div className="col-xs-4 col-md-2 col-no-gutter small">
                <div className="display-flex flex-justify-center small">DATE</div>
              </div>
            </div>
            <div className={clsx(s.report_row, 'row')}>
              <div className="col-xs-8 col-md-10 col-no-gutter small">QUESTIONS</div>
              <div className="col-xs-4 col-md-2 col-no-gutter">
                <div className="display-flex flex-justify-center small">{reportDate}</div>
              </div>
            </div>
            {answers.map((answer, index) => {
              return (
                <div className={clsx(s.report_row, 'row')} key={index}>
                  <div className="col-xs-8 col-md-10 col-no-gutter small colour-black">
                    {answer.questionText} ({answer.minRating}-{answer.maxRating} scale)
                  </div>
                  <div className="col-xs-4 col-md-2 col-no-gutter small colour-black">
                    <div className="display-flex flex-justify-center align-items-center height-100-perc">
                      {answer.resultsPerDay[reportDate]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if ((getData && !getData.successful) || getError) {
    return (
      <ErrorComponent
        title="Oops"
        description={getData.message}
        todo="Please try to reload the page."
      />
    );
  }
};

export default Report;
