import { combineReducers } from 'redux';
import * as githubTrending from './reducer/githubTrending';

export const initialState = {
    githubTrending: githubTrending.initialState,
};

export default combineReducers({
    githubTrending: githubTrending.reducer,
});
