import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer, { initialState } from './store/rootReducer';

const persistConfig = {
    key: 'primary',
    storage,
    whitelist: [
        'githubTrending',
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];
let freeze;

// See https://github.com/pahund/webpack-devprod-experiment
if (process.env.NODE_ENV === 'development') {
    /* eslint-disable-next-line */
    freeze = require('redux-freeze');
    middlewares.push(freeze);
}

const initializeStore = (state = initialState) => createStore(
    persistedReducer,
    state,
    composeWithDevTools(applyMiddleware(...middlewares)),
);

export default initializeStore;
