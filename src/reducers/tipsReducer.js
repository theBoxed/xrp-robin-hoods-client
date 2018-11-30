import {
  FETCH_SCORECARD_REQUEST,
  FETCH_SCORECARD_SUCCESS,
  FETCH_SCORECARD_ERROR
} from '../actions/scorecard';

const initialState = {
  loading: false,
  error: null,
  //weeklyStats
  weekTotalXrp: null,
  weekTotalTips: null,
  weekXrpSeries: null,
  weekTipsSeries: null,
  weekTippers: null,
  weekRecipients: null,
  weekNewTippers: null,
  weekNewRecipients: null,
  //All Stats
  allTotalXrp: null,
  allTotalTips: null,
  allXrpSeries: null,
  allTipsSeries: null,
  allTippers: null,
  allRecipients: null,
  allNewTippers: null,
  allNewRecipients: null
};

export default function tipsReducer(state = initialState, action) {
  if (action.type === FETCH_SCORECARD_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null });
  } else if (action.type === FETCH_SCORECARD_SUCCESS) {
    return {
      ...state,
      [action.period +
      'TotalXrp']: action.queryResults.totalResults[0].xrp.toFixed(0),
      [action.period + 'TotalTips']: action.queryResults.totalResults[0].tips,
      [action.period +
      'XrpSeries']: action.queryResults.tipXRPResults.sumSeries.reverse(),
      [action.period +
      'TipsSeries']: action.queryResults.tipXRPResults.countSeries.reverse(),
      [action.period + 'Tippers']: action.queryResults.tipperResults,
      [action.period + 'Recipients']: action.queryResults.recipientsResults,
      [action.period + 'NewTippers']: action.queryResults.newTippersResults,
      [action.period + 'NewRecipients']: action.queryResults
        .newRecipientsResults,
      loading: false
    };
  } else if (action.type === FETCH_SCORECARD_ERROR) {
    return Object.assign({}, state, { loading: false, error: true });
  } else {
    return state;
  }
}
