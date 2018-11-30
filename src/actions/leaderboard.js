import { API_BASE_URL } from '../config';

export const FETCH_LEADERBOARD_REQUEST = 'FETCH_LEADERBOARD_REQUEST';
export const fetchLeaderboardRequest = () => ({
  type: FETCH_LEADERBOARD_REQUEST
});

export const FETCH_LEADERBOARD_SUCCESS = 'FETCH_LEADERBOARD_SUCCESS';
export const fetchLeaderboardSuccess = (leaderboardData, period, userType) => ({
  type: FETCH_LEADERBOARD_SUCCESS,
  leaderboardData,
  period,
  userType
});

export const FETCH_LEADERBOARD_ERROR = 'FETCH_LEADERBOARD_ERROR';
export const fetchLeaderboardError = error => ({
  type: FETCH_LEADERBOARD_ERROR,
  error
});

//Add Limit to Query and Organize the Data

export const fetchLeaderboardData = (period, userType) => {
  return (dispatch) => {
    // console.log(`LEADERBOARD ACTION PERIOD: ${period}`);
    dispatch(fetchLeaderboardRequest());
    fetch(`${API_BASE_URL}/api/leaderboard?period=${period}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((leaderboardData) => {
        // console.log('this is the leaderboardData ' + JSON.stringify(leaderboardData));
        dispatch(fetchLeaderboardSuccess(leaderboardData, period, userType))
      })
      .catch(error => dispatch(fetchLeaderboardError(error)))
  }
}





