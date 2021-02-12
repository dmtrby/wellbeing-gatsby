import React, { useEffect, useContext } from 'react';
import useAxios from 'axios-hooks';
import { useCookies } from 'react-cookie';

import { reportData } from 'src/mockedData';
import { LoadingOverlayContext } from 'src/contextProviders/LoadingOverlayProvider/LoadingOverlayProvider';
import { COOKIE_NAMES } from 'src/constants';

const Report = () => {
  const [cookies, setCookie] = useCookies(COOKIE_NAMES.EMAIL);
  const { setLoading } = useContext(LoadingOverlayContext);
  const { title, answers, surveyDates } = reportData;
  const emailCookie = cookies[COOKIE_NAMES.EMAIL];

  const [{ data: getData, loading: getLoading, error: getError }, loadData] = useAxios(
    {
      url: 'https://reqres.in/api/register?delay=1',
      method: 'GET'
    },
    { manual: true }
  );

  useEffect(() => {
    setLoading(true);
    const promise2 = loadData();
    promise2.then((d) => {
      getData = d;
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [])

  const reportDate = surveyDates[0];

  return (
    getData ? <>
      <div className="margin-top-3">
        <h1>{title}</h1>
      </div>
      <div className="margin-top-4">
        <h3>Your wellbeing</h3>
      </div>
      <div className="margin-top-2">
        <span className="small">Track your response over time by viewing your weekly reports</span>
      </div>
      <div className="margin-top-1">
       <div>
         <div className="row">
           <div className="col-xs-8 col-lg-10"></div>
           <div className="col-xs-4 col-lg-2">WEEKS</div>
         </div>
         <div className="row">
           <div className="col-xs-8 col-lg-10">QUESTIONS</div>
           <div className="col-xs-4 col-lg-2">{reportDate}</div>
         </div>
         {answers.map((answer, index) => {
           return <div className="row" key={index}>
           <div className="col-xs-8 col-lg-10 col-no-gutter small colour-black">{answer.questionText} ({answer.minRating}-{answer.maxRating} scale)</div>
           <div className="col-xs-4 col-lg-2 col-no-gutter small colour-black">{answer.resultsPerDay[reportDate]}</div>
         </div>
         })}
       </div>
      </div>
    </> : <div></div>
  )

}

export default Report;