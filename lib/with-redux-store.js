/* eslint-disable */
import React from 'react';
import initializeStore from '../store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
    // Always make a new store if server, otherwise state is shared between requests
    if (isServer) {
        return initializeStore(initialState);
    }

    // Create store if unavailable on the client and set it on the window object
    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
    }
    return window[__NEXT_REDUX_STORE__];
}

const AppWithReduxFactory = App => class AppWithRedux extends React.Component {
    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore()
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
;

export default AppWithReduxFactory;
