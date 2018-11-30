//TODO: Create a fetch for recipients (I think it only impacts the tipperResults Query)

import { API_BASE_URL } from '../config';

export const FETCH_SCORECARD_REQUEST = 'FETCH_SCORECARD_REQUEST';
export const fetchScorecardRequest = () => ({
  type: FETCH_SCORECARD_REQUEST
});

export const FETCH_SCORECARD_SUCCESS = 'FETCH_SCORECARD_SUCCESS';
export const fetchScorecardSuccess = (queryResults, period) => ({
  type: FETCH_SCORECARD_SUCCESS,
  queryResults,
  period
});

export const FETCH_SCORECARD_ERROR = 'FETCH_SCORECARD_ERROR';
export const fetchScorecardError = error => ({
  type: FETCH_SCORECARD_ERROR,
  error
});

export const fetchScorecardData = period => {
  return dispatch => {
    dispatch(fetchScorecardRequest());
    fetch(`${API_BASE_URL}/api/tips?period=${period}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(queryResults => {
        dispatch(fetchScorecardSuccess(queryResults, period));
      })
      .catch(error => dispatch(fetchScorecardError(error)));
  };
};
