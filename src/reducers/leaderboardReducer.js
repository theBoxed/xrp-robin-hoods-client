import {
  FETCH_LEADERBOARD_REQUEST,
  FETCH_LEADERBOARD_SUCCESS,
  FETCH_LEADERBOARD_ERROR
} from '../actions/leaderboard';

const initialState = {
  loading: false,
  error: null,
  weekTipsSentLeaders: null,
  weekXrpSentLeaders: null,
  weekTipsReceivedLeaders: null,
  weekXrpReceivedLeaders: null,
  allTipsSentLeaders: null,
  allXrpSentLeaders: null,
  allTipsReceivedLeaders: null,
  allXrpReceivedLeaders: null
};

export default function leaderboardReducer(state = initialState, action) {
  if (action.type === FETCH_LEADERBOARD_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null });
  } else if (action.type === FETCH_LEADERBOARD_SUCCESS) { 
    return {
      ...state,
      [action.period + 'TipsSentLeaders']: action
        .leaderboardData.TipsSentLeaders,
      [action.period + 'XrpSentLeaders']: action
        .leaderboardData.XrpSentLeaders,
      [action.period + 'TipsReceivedLeaders']: action
        .leaderboardData.TipsReceivedLeaders,
      [action.period + 'XrpReceivedLeaders']: action
        .leaderboardData.XrpReceivedLeaders,
      loading: false
    };
  } else if (action.type === FETCH_LEADERBOARD_ERROR) {
    return Object.assign({}, state, { loading: false, error: true });
  } else {
    return state;
  }
}
