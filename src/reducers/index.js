import { combineReducers } from 'redux';
import tipsReducer from './tipsReducer';
import leaderboardReducer from './leaderboardReducer';


const rootReducer = combineReducers({
  tipsReducer, leaderboardReducer
});

export default rootReducer;
