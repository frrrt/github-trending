/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider as StoreProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import theme from '../lib/theme';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.reduxStore);
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props;

        return (
            <>
                <Head>
                    <title>Github Trending</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <StoreProvider store={reduxStore}>
                        <PersistGate loading={<Component {...pageProps} />} persistor={this.persistor}>
                            <Component {...pageProps} />
                        </PersistGate>
                    </StoreProvider>
                </ThemeProvider>
            </>
        );
    }
}

export default withReduxStore(MyApp);
